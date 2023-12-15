import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from './todo-list';

@Injectable({
  providedIn: 'root'
})
export class MarkTodoAsDoneService {

  constructor(private http: HttpClient){}

  private baseUrl = "http://localhost:8080/api/todos";

  updateTodo(id?: any): Observable<Object> {
    return this.http.patch<any>(
      `${this.baseUrl}/${id}/true`, id)
  }
  undoTodo(id?: any): Observable<Object> {
    return this.http.patch<any>(
      `${this.baseUrl}/${id}/false`, id)
  }
}
