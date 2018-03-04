import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material components import
import {MatToolbarModule} from '../../node_modules/@angular/material/toolbar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
