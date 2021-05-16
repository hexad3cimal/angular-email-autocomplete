import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularEmailAutocompleteComponent } from './angular-email-autocomplete.component';



@NgModule({
  declarations: [
    AngularEmailAutocompleteComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    AngularEmailAutocompleteComponent
  ]
})
export class AngularEmailAutocompleteModule { }
