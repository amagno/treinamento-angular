export class PersistLocal<T> {
  private key: string;
  private defaultState: T;
  constructor(key?: string, defaultState?: T) {
    this.key = key ? 'app-storage-' + key : 'app-storage';
    this.defaultState = defaultState;
  }
  saveStorage(state: T): void {
    const jsonString = JSON.stringify(state);
    localStorage.setItem(this.key, jsonString);
  }
  getStorage(): T {
    const parsed = JSON.parse(localStorage.getItem(this.key)) as T;
    return parsed || this.defaultState;
  }

}
