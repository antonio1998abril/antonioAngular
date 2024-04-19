import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomBComponent } from 'src/app/components/custom-b/custom-b.component';


@NgModule({
  declarations: [CustomBComponent],
  imports: [
    CommonModule
  ],
  exports:[CustomBComponent]
})
export class ModuleBModule { }

