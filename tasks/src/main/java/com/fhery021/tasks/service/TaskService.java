package com.fhery021.tasks.service;

import com.fhery021.tasks.domain.Task;

public interface TaskService {

     Iterable<Task> list();

     Task save(Task task);

}
