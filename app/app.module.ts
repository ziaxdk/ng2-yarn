import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { No1Component } from './app.no1'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, No1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
