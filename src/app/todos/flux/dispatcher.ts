import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/do';

export class Dispatcher extends Subject<any> {
  dispatch(value: any): void {
    this.next(value);
  }
}
