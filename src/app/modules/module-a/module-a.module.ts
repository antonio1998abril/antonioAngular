import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomAComponent } from 'src/app/components/custom-a/custom-a.component';


@NgModule({
  declarations: [CustomAComponent],
  imports: [
    CommonModule
  ],
  exports:[CustomAComponent]
})
export class ModuleAModule { }
