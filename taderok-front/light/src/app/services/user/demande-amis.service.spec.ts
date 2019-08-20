import { TestBed } from '@angular/core/testing';

import { DemandeAmisService } from './demande-amis.service';

describe('DemandeAmisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemandeAmisService = TestBed.get(DemandeAmisService);
    expect(service).toBeTruthy();
  });
});
