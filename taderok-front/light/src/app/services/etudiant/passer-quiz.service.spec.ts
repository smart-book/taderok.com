import { TestBed } from '@angular/core/testing';

import { PasserQuizService } from './passer-quiz.service';

describe('PasserQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasserQuizService = TestBed.get(PasserQuizService);
    expect(service).toBeTruthy();
  });
});
