import {HttpClient} from '@angular/common/http';
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly PATH = '/api/tasks'

  constructor(
    private http: HttpClient
  ) {
  }

  getTasks() {
    return this.http.get(this.PATH)
  }

}
