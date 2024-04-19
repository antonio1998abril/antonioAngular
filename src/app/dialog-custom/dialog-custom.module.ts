import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ DialogOverviewExampleDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, 
    MatButtonModule, 
    MatFormFieldModule,
    BrowserAnimationsModule,
  ]
})
export class DialogCustomModule { }
