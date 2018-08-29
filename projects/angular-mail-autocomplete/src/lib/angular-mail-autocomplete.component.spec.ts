import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMailAutocompleteComponent } from './angular-mail-autocomplete.component';

describe('AngularMailAutocompleteComponent', () => {
  let component: AngularMailAutocompleteComponent;
  let fixture: ComponentFixture<AngularMailAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMailAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMailAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
