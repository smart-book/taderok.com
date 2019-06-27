import { TestBed } from '@angular/core/testing';

import { AjouterQuizService } from './ajouter-quiz.service';

describe('AjouterQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjouterQuizService = TestBed.get(AjouterQuizService);
    expect(service).toBeTruthy();
  });
});
