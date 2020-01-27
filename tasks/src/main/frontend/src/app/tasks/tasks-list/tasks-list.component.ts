import {Task} from './../task.model';
import {Component, OnInit} from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TasksService) {
  }

  ngOnInit() {

    return this.taskService
      .getTasks()
      .subscribe(
        (tasks: any[]) => {
          this.tasks = tasks
        },
        error1 => console.log(error1));

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
