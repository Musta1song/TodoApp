package com.example.TodoApp;

import jakarta.persistence.*;

import java.io.Serializable;
import java.sql.Date;
import java.time.LocalTime;


@Entity
@Table(name = "TODOLIST")
public class TodoList {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "time")
    private LocalTime time;
    @Column(name = "todo")
    private String todo;


    @Column(name = "isDone")
    private Boolean isDone;


    public TodoList(LocalTime time, String todo, Boolean isDone) {
        super();
        this.time = time;
        this.todo = todo;
        this.isDone = isDone;
    }

    public long getId() {
        return id;
    }

    public LocalTime getTime() {return time;}

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public String getTodo() {
        return todo;
    }

    public void setTodo(String todo) {
        this.todo = todo;
    }

    public Boolean getIsDone() { return isDone;}

    public void setIsDone(Boolean isDone){ this.isDone = isDone;}

    public TodoList(){}


}
