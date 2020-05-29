import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazylodingRoutingModule } from './lazyloding-routing.module';
import { LazylodingComponent } from './lazyloding.component';
import { MainComponent } from '../main/main.component';
import { DialogdeletioncomponentComponent } from '../dialogdeletioncomponent/dialogdeletioncomponent.component';
import { DialogknowmoreComponent } from '../dialogknowmore/dialogknowmore.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../appmaterial';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { ApiService } from '../api.service';


@NgModule({
  declarations: [    
    MainComponent,
    DialogdeletioncomponentComponent,
    DialogknowmoreComponent
  ],
  entryComponents: [
    DialogdeletioncomponentComponent,
    DialogknowmoreComponent
  ],
  imports: [
    CommonModule,
    LazylodingRoutingModule,        
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })    
  ],
  providers: [ApiService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class LazylodingModule {
  constructor(){
    console.log("lazy loading module")
  }
 }
