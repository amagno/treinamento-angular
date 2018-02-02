import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Todo } from './todo';
import { PersistLocal } from './persist-local';

export class LocalStore<T> extends BehaviorSubject<T> {
  constructor(private storage: PersistLocal<T>) {
    super(storage.getStorage());
  }
  save(): void {
    this.subscribe(() => {
      this.storage.saveStorage(this.value);
    });
  }
}
