import { TestBed } from '@angular/core/testing';

import { GetTodoListService } from './get-todo-list.service';

describe('GetTodoListService', () => {
  let service: GetTodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
