import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContainerService {
  private opened = new Subject<boolean>();
  constructor() {
    this.opened.next(false);
  }
  openSideNav() {
    this.opened.next(true);
  }
  closeSideNav() {
    this.opened.next(false);
  }
  getSideNavObservable(): Observable<boolean> {
    return this.opened;
  }
}

