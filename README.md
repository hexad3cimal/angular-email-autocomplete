Angular Email Autocomplete

Autocomplete email module for Angular 6+. 

Usage
Import AngularMailAutocompleteModule into app.module.ts

```
import {AngularMailAutocompleteModule} from 'angular-mail-autocomplete';
imports: [
    BrowserModule,AngularMailAutocompleteModule,....
]
```


Add the directive in the component you want to use. The selectedValue will output the value selected to the used component.
Pass in the list of domains you want. Example usage is as follows.

```
<autocomplete givenPlaceHolder="Sample Placeholder" [domainNames]="['gmail.com', 'yahoo.com', 'msn.com', 'outlook.com']" (selectedValue)="handleSelect($event)"></autocomplete>


export class AppComponent {

    handleSelect(value){
        console.log("Selected value will be available here"+value)
    }
 }

```



