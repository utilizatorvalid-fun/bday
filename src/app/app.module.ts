import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BaloonsComponent } from './baloons/baloons.component';
import { FireworksComponent } from './fireworks/fireworks.component';

@NgModule({
  declarations: [
    AppComponent,
    BaloonsComponent,
    FireworksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
