import { Component, Input, Output, OnInit } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "autocomplete",
  template: `
    <div class="panel-container">
      <input
        class="input-panel"
        [(ngModel)]="inputValue"
        name="input-value"
        (keyup)="onInputChange()"
        (focus)="handleVisibility('show')"
        type="text"
        [placeholder]="givenPlaceHolder ? givenPlaceHolder : placeholder"
      />
      <div class="dropdown-panel" *ngIf="toggleDropDown">
        <a
          *ngFor="let v of dropDownValues"
          (click)="handleSelect(v)"
          class="dropdrown-list"
        >
          <div class="item fadeout">{{ v }}</div>
        </a>
      </div>
    </div>
  `,
  styleUrls: ['./autocomplete.component.css']
})
export class AngularMailAutocompleteComponent implements OnInit {
  public toggleDropDown: boolean;
  public dropDownValues: Array<string> = [];
  public inputValue: string;
  public placeholder: string;
  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();
  @Input() givenPlaceHolder: string;
  @Input() domainNames: Array<string>;

  ngOnInit() {
    this.toggleDropDown = false;
    this.placeholder = "Enter your value here..";
  }

  handleVisibility(visibilty: string) {
    visibilty === "show"
      ? (this.toggleDropDown = true)
      : (this.toggleDropDown = false);
  }

  handleSelect(value: string) {
    this.selectedValue.emit(value);
    this.inputValue = value;
    this.toggleDropDown = false;
  }

  onInputChange() {
    this.toggleDropDown = true;
    this.dropDownValues = [];
    if (this.inputValue && this.inputValue !== "") {
      this.domainNames.forEach(domainName => {
        const valueToDisplay = this.inputValue + "@" + domainName;
        if (this.dropDownValues.indexOf(valueToDisplay)) {
          this.dropDownValues.push(valueToDisplay);
        }
      });
    } else {
      this.toggleDropDown = false;
    }
  }
}
