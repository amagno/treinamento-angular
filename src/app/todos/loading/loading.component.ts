import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {
  loading = false;
  progress = 0;
  subcription: Subscription;
  constructor(
    private loadingService: LoadingService
  ) { }
  ngOnInit() {
    this.subcription = this.loadingService.getLoadingObservable().subscribe((loading) => {
      if (loading) {
        this.loadingService.getProgressObservable().subscribe((progress) => {
          this.progress = progress;
        });
      } else {
        this.progress = 0;
      }
      this.loading = loading;
    });
  }
  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
