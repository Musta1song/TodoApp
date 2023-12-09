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
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatCardModule, FormsModule, MatButtonModule,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  todolist!: TodoList[]
  todos: TodoList = new TodoList()


  id!: number

  constructor(
    public deleteService: DeleteService,
    public getTodoListService: GetTodoListService,
    public postService: PostService,
    public isDoneService: MarkTodoAsDoneService) { }
  title = 'TodoApp';
  deleteTodo() {
    this.deleteService.deleteTodo(this.id).subscribe();
    window.location.reload()
  }
  markTodoAsDone(){
    this.isDoneService.updateTodo(this.id).subscribe();
    window.location.reload()
  }
  ngOnInit(): void {
    this.getTodoListService.GetTodoList().subscribe((data: TodoList[]) => {
      console.log(data);
      this.todolist = data;
    });
  }
 
  CheckBoxEvent(event: any){
    this.id=event.target.value;
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
    MakeTodoFormVisible(){
      const NewTodoForm = document.getElementById("NewTodoForm");
      NewTodoForm!.style.visibility = "visible";
      
    }
  
}
