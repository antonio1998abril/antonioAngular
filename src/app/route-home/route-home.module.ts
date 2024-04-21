import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouteHomeComponent } from './route-home.component';


@NgModule({
  declarations: [RouteHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class RouteHomeModule  {
  constructor() { }

 }
