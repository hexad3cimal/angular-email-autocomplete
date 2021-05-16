import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'autocomplete',
  template: `
    <div class="panel-container">
      <input
        class="input-panel"
        [(ngModel)]="inputValue"
        (keyup)="onInputChange()"
        (focus)="handleVisibility('show')"
        type="text"
        [placeholder]="givenPlaceHolder ? givenPlaceHolder : placeholder"
      />
      <div class="dropdown-panel" *ngIf="toggleDropDown">

        <div
          *ngFor="let domain of dropDownValues"
          (click)="handleSelect(domain.value)"
          class="dropdrown-list"
        >
        <img *ngIf="domain.imgUrl" class="image" src={{domain.imgUrl}} />
          <span class="item">{{ domain.value }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./autocomplete.component.css']
})

export class AngularEmailAutocompleteComponent{
  public toggleDropDown: boolean;
  public dropDownValues: Array<{
    imgUrl?: undefined | string,
    value: string
  }> = [];
  public inputValue: string;
  public placeholder: string;
  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() givenPlaceHolder: string;
  @Input() domainNames: Array<{
    imgUrl?: undefined | string,
    value: string
  }>;

  constructor(){
    this.toggleDropDown = false;
    this.placeholder = 'Enter your value here..';
    this.inputValue = '';
    this.givenPlaceHolder = '';
    this.domainNames = [];
  }

  handleVisibility = (visibilty: string) => {
    visibilty === 'show' && this.dropDownValues.length
      ? (this.toggleDropDown = true)
      : (this.toggleDropDown = false);
  }

  handleSelect = (value: string) => {
    this.selectedValue.emit(value);
    this.inputValue = value;
    this.toggleDropDown = false;
  }

  onInputChange = () => {
    this.toggleDropDown = true;
    this.dropDownValues = [];
    if (this.inputValue && this.inputValue.length) {
      this.domainNames.forEach(domainName => {
        const valueToDisplay = `${this.inputValue }@${domainName.value}`;
        this.dropDownValues.push({value : valueToDisplay, imgUrl: domainName.imgUrl});

      });
    } else {
      this.toggleDropDown = false;
    }
  }
}
