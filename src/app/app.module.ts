import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FDEHttpService } from '../service/fde-http.service';
import {   provideHttpClient } from '@angular/common/http';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [FDEHttpService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
