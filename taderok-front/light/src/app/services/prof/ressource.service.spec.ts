import { TestBed } from '@angular/core/testing';

import { RessourceService } from './ressource.service';

describe('RessourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RessourceService = TestBed.get(RessourceService);
    expect(service).toBeTruthy();
  });
});
