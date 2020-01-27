import { Task } from './task.model';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly PATH = '/api/tasks';

  constructor(
    private http: HttpClient
  ) {
  }

  getTasks() {
    return this.http.get(this.PATH);
  }

  saveTask(task: Task, checked: boolean) {
    task.completed = checked;
    const req = new HttpRequest('POST', '/api/tasks/save', task, { reportProgress: true });

    return this.http.request(req);

    // return this.http.post(this.PATH.concat('/save'), task);
  }



}
