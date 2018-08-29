import { NgModule } from '@angular/core';
import { AngularMailAutocompleteComponent } from './angular-mail-autocomplete.component';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [FormsModule, CommonModule
  ],
  declarations: [AngularMailAutocompleteComponent],
  exports: [AngularMailAutocompleteComponent]
})
export class AngularMailAutocompleteModule { }
