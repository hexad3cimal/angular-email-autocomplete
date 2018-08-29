import { Component, Input, Output, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'autocomplete',
  template: `
  <div class='panel'>
  <input class='admin-panel' [value]="selected" [(ngModel)]="inputValue" name ="input-value" (keyup)="onInputChange()"   (focus)="handleVisibility('show')"  type='text' id='toggle' />

<div class='menu-panel' *ngIf="toggleDropDown">
  <a *ngFor="let v of dropDownValues"  (click)="handleSelect(v)" class='row'>
    <div class='column-left'>{{v}}</div>
    <div class='column-right'></div>
  </a>
</div>
  `,
  styleUrls: ['./autocomplete.component.css']
})
export class AngularMailAutocompleteComponent implements OnInit {

  
  ngOnInit(){
    this.toggleDropDown = false;
    this.domainNames = ['gmail.com','yahoo.com','msn.com','rediffmail.com','aol.com']
  }

  public toggleDropDown: boolean
  public domainNames:Array<string>;
  public dropDownValues:Array<string> = [];
  public inputValue: string;

  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();

  handleVisibility(visibilty: string){
    visibilty === 'show' ?  this.toggleDropDown = true : this.toggleDropDown = false;
  }
  
 handleSelect(value: string){
   this.selectedValue.emit(value)
   this.inputValue = value;
   this.toggleDropDown = false;
  }

  onInputChange(){
    this.toggleDropDown = true;
    this.dropDownValues = [];
    if(this.inputValue && this.inputValue !== ''){
      this.domainNames.forEach( domainName => {
        const valueToDisplay = this.inputValue + '@' + domainName;
        if(this.dropDownValues.indexOf(valueToDisplay))
        {
          this.dropDownValues.push(valueToDisplay);
        }
      })
    }else{
      this.toggleDropDown = false;
    }
   
  }

}
