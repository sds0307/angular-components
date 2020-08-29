import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularComponentsModule } from '@sds0307/angular-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
