import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Dispatcher } from './dispatcher';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

export interface Action {
  type?: string;
  payload?: any;
}
export type Reducer<T = any> = (state: T, action: Action) => T;

export class Store<RootState = {}> extends BehaviorSubject<RootState> {
  constructor(
    initialState: RootState,
    private reducers: Reducer<RootState>,
    private beforeMiddleware: any,
    private afterMiddleware: any,
    private dispatcher: Dispatcher = new Dispatcher()
  ) {
    super(initialState);
    this.dispatcher
      .let(this.beforeMiddleware)
      .scan((state, action) => this.reducers(<RootState>state, action), initialState)
      .let(this.afterMiddleware)
      .subscribe(state =>  super.next(<RootState>state));
  }
  select<T>(key: string): Observable<T> {
    return this
      .map(state => state[key])
      .distinctUntilChanged();
  }
  dispatch(action: Action) {
    this.dispatcher.dispatch(action);
  }
}
