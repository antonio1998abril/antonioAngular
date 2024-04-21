import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteHomeComponent } from '../route-home/route-home.component';
import { IndividualCustomComponent } from '../route-home/individual-custom/individual-custom.component';

@NgModule({
  declarations: [
    IndividualCustomComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RouteDemoModule  {
  constructor() { }

 }
