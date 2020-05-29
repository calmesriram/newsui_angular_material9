import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazylodingModule } from './lazyloding/lazyloding.module';
@NgModule({
  declarations: [
    AppComponent,    
  ], 
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LazylodingModule    
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("app module loaded");
  }
 }
