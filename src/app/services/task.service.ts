import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Task } from '../Task';
import { TASKS } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks' // fake backend(json-server)

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    //const tasks = of(TASKS);
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(deleteUrl);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const updateUrl = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(updateUrl, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
  

}
