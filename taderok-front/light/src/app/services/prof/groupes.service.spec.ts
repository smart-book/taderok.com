import { TestBed } from '@angular/core/testing';

import { GroupesService } from './groupes.service';

describe('GroupesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupesService = TestBed.get(GroupesService);
    expect(service).toBeTruthy();
  });
});
