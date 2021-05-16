# Angular Mail Autocomplete

Convert your input field to a drop-down with domain names appended.

## Installation

```bash
npm i angular-mail-autocomplete
```

## Options
|   Property| Description | Sample |
| ------------- | -------------  | ------------- |
| givenPlaceHolder  | Placeholder value that needs to be displayed in the input field  | Enter your value here.. |
| domainNames  | List of domain names that needs to be passed (value is mandatory but imgUrl is optional) | [{value: "gmail.com", imgUrl: 'url'},{value : "yahoo.com"}] |
| selectedValue  | Here you have to pass in the function to receive the selected value by user   | handleSelect(value: string) |


## Usage

TS

```node
export class AppComponent {

//If you want to use in a formgroup
  formControlEmail = new FormControl('', [Validators.required]);

  domains = [
    {
      value: 'gmail.com',
      imgUrl: 'https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png'
    }, {value: 'yahoo.com'}, {value: 'msn.com'}, {value: 'outlook.com'}, {value: 'hotmail.com'}, {value: 'live.com'}
  ];

  sampleForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: this.formControlEmail
  });

//When ever user selects a value it will be available here
  handleSelect(value: string): void {
    console.log('value in parent' + value);
    this.formControlEmail.setValue(value);
  }


//For forms
  onSubmit(): void {
    console.log(this.sampleForm.value);
  }
}
```

HTML

```html
<form [formGroup]="sampleForm" (ngSubmit)="onSubmit()">
  <autocomplete givenPlaceHolder="Sample Placeholder" [domainNames]="domains"
                (selectedValue)="handleSelect($event)"></autocomplete>
  <input type="text" formControlName="firstName">
  <input type="text" formControlName="lastName">

  <button [disabled]="!sampleForm.valid">Submit</button>
</form>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
GPL
