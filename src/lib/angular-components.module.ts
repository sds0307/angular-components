import { NgModule } from '@angular/core';
import { AngularComponentsComponent } from './angular-components.component';
import { SdsSpinnerComponent } from './components/sds-spinner/sds-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
      AngularComponentsComponent, 
      SdsSpinnerComponent],
  imports: [
    MatProgressSpinnerModule
  ],
  exports: [
      AngularComponentsComponent,
      SdsSpinnerComponent]
})
export class AngularComponentsModule { }
