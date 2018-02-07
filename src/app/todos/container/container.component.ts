import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/zip';
import { ContainerService } from '../container.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  open = false;

  constructor(
    private containerService: ContainerService,
    private router: Router
  ) { }

  ngOnInit() {
    const url = this.router.url;

    if (url.includes('edit:')) {
      this.open = true;
    }
    this.containerService.getSideNavObservable().subscribe(open => {
      this.open = open;
    });
  }
  handleClose() {
    this.containerService.closeSideNav();
    this.router.navigate(['/', 'todos']);
  }

}
