import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThirdHomeWorkComponent } from './third-home-work/third-home-work.component';
import { CapitalizeDirective} from './capitalize.directive';

@NgModule({
  declarations: [
    AppComponent,
    ThirdHomeWorkComponent,
    CapitalizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
