import { TestBed } from '@angular/core/testing';

import { AnnonceServiceService } from './annonce-service.service';

describe('AnnonceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnonceServiceService = TestBed.get(AnnonceServiceService);
    expect(service).toBeTruthy();
  });
});
