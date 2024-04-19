import { Component } from '@angular/core';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';


export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.scss'],
})
export class MaterialDialogComponent {
  name: string='';
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }

}
