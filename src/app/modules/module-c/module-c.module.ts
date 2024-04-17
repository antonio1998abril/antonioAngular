import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCComponent } from 'src/app/components/custom-c/custom-c.component';


@NgModule({
  declarations: [CustomCComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CustomCComponent
  ]
})
export class ModuleCModule { }
