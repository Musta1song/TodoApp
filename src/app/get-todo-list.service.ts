import { Injectable } from '@angular/core';
import { TodoList } from './todo-list';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetTodoListService {

  constructor(private http: HttpClient) { }
  private baseUrl = "http://localhost:8080/api/todos";

  GetTodoList(): Observable<TodoList[]>{
    return this.http.get<TodoList[]>(`${this.baseUrl}`);
    
  }
}
