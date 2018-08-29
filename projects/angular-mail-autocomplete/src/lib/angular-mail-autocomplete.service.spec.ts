import { TestBed, inject } from '@angular/core/testing';

import { AngularMailAutocompleteService } from './angular-mail-autocomplete.service';

describe('AngularMailAutocompleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularMailAutocompleteService]
    });
  });

  it('should be created', inject([AngularMailAutocompleteService], (service: AngularMailAutocompleteService) => {
    expect(service).toBeTruthy();
  }));
});
