Angular Email Autocomplete

Autocomplete email module for Angular 6+. Supported domains
'gmail.com','yahoo.com','msn.com','rediffmail.com','aol.com'

Usage
Import AngularMailAutocompleteModule into app.module.ts

import {AngularMailAutocompleteModule} from 'angular-mail-autocomplete';
...
...
imports: [
    BrowserModule,AngularMailAutocompleteModule,....
]


Add the directive in the component you want to use. The selectedValue will output the value selected to the used component. Example usage is as follows.

<autocomplete givenPlaceHolder="Sample Placeholder" (selectedValue)="handleSelect($event)"></autocomplete>


export class AppComponent {

    handleSelect(value){
        console.log("Seleced value will be available here"+value)
    }
 }




