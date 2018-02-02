import { Injectable } from '@angular/core';
import { Store } from './flux/store';
import { rootReducers, RootState } from './flux/reducers/root';
import { Observable } from 'rxjs/Observable';
import { PersistLocal } from './persist-local';

export const initialState: RootState = {
  todos: [],
  filter: 'ALL'
};

@Injectable()
export class StoreService {
  private static persist = new PersistLocal<RootState>();
  private store: Store<RootState>;
  constructor() {
    const state = {
      ...initialState,
      ...StoreService.persist.getStorage()
    };
    this.store = new Store(
      state,
      rootReducers,
      this.beforeMiddleware,
      this.afterMiddleware
    );
  }
  get(): Store<RootState> {
    return this.store;
  }
  beforeMiddleware(store: Observable<RootState>) {
    return store.do(a => console.log('DISPATCHED ACTION:', a));
  }
  afterMiddleware(store: Observable<RootState>) {
    return store
      .do(s => console.log('NEW STATE:', s))
      .do(state => {
        const newState = {
          ...state,
          search: undefined
        };
        StoreService.persist.saveStorage(state);
      });
  }
}
