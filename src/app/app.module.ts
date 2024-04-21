import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingDemoComponent} from './fourth-home-work/fourth-home-work.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataBindingDemoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
