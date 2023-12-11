import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule, } from '@angular/material/button'
import { DeleteService } from './delete.service';
import { TodoList } from './todo-list';
import { OnInit } from '@angular/core';
import { GetTodoListService } from './get-todo-list.service';
import { PostService } from './post.service';
import { FormsModule } from '@angular/forms';
import { MarkTodoAsDoneService } from './mark-todo-as-done.service';
import { TodoListPage2 } from './todo-list-page2';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'TodoApp';

  constructor(
    public deleteService: DeleteService,
    public getTodoListService: GetTodoListService,
    public postService: PostService,
    public isDoneService: MarkTodoAsDoneService) { }
  todolist!: TodoList[]
  todolist2!: TodoListPage2[]
  todos: TodoList = new TodoList()
  id!: number



  deleteTodo() {
    this.deleteService.deleteTodo(this.id).subscribe();
    window.location.reload()
  }
  markTodoAsDone() {
    this.isDoneService.updateTodo(this.id).subscribe();
    window.location.reload()
  }
  ngOnInit(): void {
    this.getTodoListService.GetTodoList().subscribe((data: TodoList[]) => {
      console.log(data);
      this.todolist = data;
      this.sort(this.todolist)
    });
  }
  getTimeArr(arr: any[]) {
    let timeArr: any = [
    ]
    for (let i of arr) {
      timeArr.push(i.time)
    }
    return timeArr
  }

  sort(arr: any[]) {
    let timeArr: any[] = this.getTimeArr(arr);
    let size = arr.length;
    let minIndex;
    for (let i = 0; i < size - 1; i++) {
      minIndex = i;
      for (let j = i; j < size; j++) {
        if (timeArr[minIndex] > timeArr[j]) {
          minIndex = j;
        }
      }
      if (i !== minIndex) {
        let temp = timeArr[i];
        timeArr[i] = timeArr[minIndex];
        timeArr[minIndex] = temp;
        let temp2 = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp2
      }
    }
    return arr;
  }



  RadioEvent(event: any) {
    this.id = event.target.value;
    console.log(this.id)
  }


  // Example usage:
  CreateNewTodo() {
    if (this.todos.time == null) {
      document.getElementById("timeerr")!.innerHTML = "Geben Sie eine Uhrzeit ein!"
    }
    else if (this.todos.todo == null) {
      document.getElementById("todoerr")!.innerHTML = "Geben Sie eine Aufgabe ein!"
    }

    else {
      this.postService.CreateNewTodo(this.todos).subscribe();
      window.location.reload()
    }
  }
  MakeTodoFormVisible() {
    const NewTodoForm = document.getElementById("NewTodoForm");
    NewTodoForm!.style.visibility = "visible";

  }

}
