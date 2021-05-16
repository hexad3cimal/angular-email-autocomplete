import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  handleSelect(value: string): void {
    console.log('value in parent' + value);
    this.formControlEmail.setValue(value);
  }


  onSubmit(): void {
    console.log(this.sampleForm.value);
  }
}
