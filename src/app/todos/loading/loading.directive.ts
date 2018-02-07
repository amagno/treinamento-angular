import { Directive, ElementRef } from '@angular/core';
import { LoadingService } from '../loading.service';

@Directive({
  selector: '[appLoadingContent]'
})
export class LoadingDirective {

  constructor(
    private el: ElementRef,
    private loadingService: LoadingService
  ) {
    this.loadingService.getLoadingObservable().subscribe(loading => {
      if (loading) {
        this.loadingService.getProgressObservable().subscribe(progress => {
          const op = `opacity(${progress}%)`;
          this.el.nativeElement.style.filter = op;
        });
      } else {
        this.el.nativeElement.style.filter = 'opacity(100%)';
      }
    });
  }

}
