import { TestBed } from '@angular/core/testing';

import { MarkTodoAsDoneService } from './mark-todo-as-done.service';

describe('MarkTodoAsDoneService', () => {
  let service: MarkTodoAsDoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkTodoAsDoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
