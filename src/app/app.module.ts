import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';  // imported

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    // imports go here after adding them above
    BrowserModule,
    HttpClientModule  // now we have the ability to use this client module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
