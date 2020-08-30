import { NgModule } from '@angular/core';
import { AngularComponentsComponent } from './angular-components.component';
import { SdsSpinnerComponent } from './components/sds-spinner/sds-spinner.component';

@NgModule({
  declarations: [
      AngularComponentsComponent, 
      SdsSpinnerComponent],
  imports: [
  ],
  exports: [
      AngularComponentsComponent,
      SdsSpinnerComponent]
})
export class AngularComponentsModule { }
