Angular Email Autocomplete

Autocomplete email module for Angular 6+. Supported domains
'gmail.com','yahoo.com','msn.com','rediffmail.com','aol.com'

Usage
Import AngularMailAutocompleteModule in app.module.ts

Add the directive in html

<autocomplete (selectedValue)="handleSelect($event)"></autocomplete>

pass the function to handle the selected value into (selectedValue).

Now the seleced value will be available in the component




