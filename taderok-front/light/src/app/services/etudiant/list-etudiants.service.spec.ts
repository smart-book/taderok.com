import { TestBed } from '@angular/core/testing';

import { ListEtudiantsService } from './list-etudiants.service';

describe('ListEtudiantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListEtudiantsService = TestBed.get(ListEtudiantsService);
    expect(service).toBeTruthy();
  });
});
