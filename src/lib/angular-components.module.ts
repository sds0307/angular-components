import { NgModule } from '@angular/core';
import { AngularComponentsComponent } from './angular-components.component';
import { SdsSpinnerComponent } from './components/sds-spinner/sds-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SdsProfileCardComponent } from './components/sds-profile-card/sds-profile-card.component';

@NgModule({
  declarations: [
      AngularComponentsComponent,
      SdsSpinnerComponent,
      SdsProfileCardComponent],
  imports: [
    MatProgressSpinnerModule
  ],
  exports: [
      AngularComponentsComponent,
      SdsSpinnerComponent,
      SdsProfileCardComponent]
})
export class AngularComponentsModule { }
