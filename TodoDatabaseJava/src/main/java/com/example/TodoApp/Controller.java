package com.example.TodoApp;
import com.example.TodoApp.TodoList;
import com.example.TodoApp.TodoRepository;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/")

public class Controller {

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping("todos")
    public List<TodoList> getTodoList() {
        return this.todoRepository.findAll();
    }

    @PostMapping(value = "newTodo", consumes = "application/json", produces = "application/json")
    public ResponseEntity<TodoList> CreateNewTodo(@RequestBody TodoList todo) {
        TodoList todolist = todoRepository.save(new TodoList(todo.getTime(), todo.getTodo(), todo.getIsDone()));
        return new ResponseEntity<>(todolist, HttpStatus.CREATED);
    }

    @DeleteMapping("/todos/{id}")
    public Map<String, Boolean> deleteTodo(@PathVariable(value = "id") Long id)
            throws ResourceNotFoundException {
        TodoList todo = todoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Todo not found for this id :: " + id));

        todoRepository.delete(todo);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    @PatchMapping("/todos/{id}/true")
    public ResponseEntity<TodoList> updateTodo(@PathVariable Long id) {
        try {
            TodoList todo = todoRepository.findById(id).get();
            todo.setIsDone(true);
            return new ResponseEntity<TodoList>(todoRepository.save(todo), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

