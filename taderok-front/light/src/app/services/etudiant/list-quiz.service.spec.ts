import { TestBed } from '@angular/core/testing';

import { ListQuizService } from './list-quiz.service';

describe('ListQuizService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListQuizService = TestBed.get(ListQuizService);
    expect(service).toBeTruthy();
  });
});
