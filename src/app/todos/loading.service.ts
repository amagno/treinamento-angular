import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { interval } from 'rxjs/observable/interval';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/take';

@Injectable()
export class LoadingService {
  private loading = new Subject<boolean>();
  constructor() {
    this.loading.next(false);
  }
  start(): void {
    this.loading.next(true);
  }
  stop(): void {
    this.loading.next(false);
  }
  show(time: number = 1000): void {
    this.loading.next(true);
    setTimeout(() => this.loading.next(false), time);
  }
  getLoadingObservable(): Observable<boolean> {
    return this.loading;
  }
  getProgressObservable(time: number = 0): Observable<number> {
    return interval(time).take(101);
  }
}
