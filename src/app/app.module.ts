import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import { DialogCustomModule } from './dialog-custom/dialog-custom.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MaterialDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogCustomModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
