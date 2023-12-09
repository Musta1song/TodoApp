package com.example.TodoApp;

import java.util.List;

import org.hibernate.mapping.Table;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<TodoList, Long> {
}