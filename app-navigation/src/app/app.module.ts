import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonUiModule } from './common/common-ui.module';
import { AllContentModule } from './all-content/all-content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonUiModule,
    AllContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
