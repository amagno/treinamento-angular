import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatIcon,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  exports: [
    FlexLayoutModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatCheckboxModule
  ]
})
export class TodosStyleModule { }
