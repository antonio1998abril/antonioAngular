import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAComponent } from './components/custom-a/custom-a.component';
import { CustomBComponent } from './components/custom-b/custom-b.component';
import { CustomCComponent } from './components/custom-c/custom-c.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomAComponent,
    CustomBComponent,
    CustomCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
