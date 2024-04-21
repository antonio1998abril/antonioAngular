import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualComponent } from './individual.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IndividualComponent],
  imports: [
    CommonModule,
    RouterModule,  
  ]
})
export class IndividualModule { }
