import { Task } from './../task.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];

  constructor() { }

  ngOnInit() {
    this.tasks.push(new Task(1, 'one', true, '2019.01.26'));
    this.tasks.push(new Task(2, 'second task', false, '2019.01.27'));
    this.tasks.push(new Task(1, 'third task', false, '2019.01.30'));
  }

  getDueDateBadge(task: Task) {
    return task.completed ? 'badge-success' : 'badge-primary';
  }

  onTaskChange(checked, task) {
    // this.taskService.saveTask(task, event.target.checked).subscribe();
    console.log('event and the task');
    console.log(checked);
    console.log(task);

  }
}
