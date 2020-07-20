import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Task} from '../models/Task';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskOverviewsService {

  constructor() {
  }

  getTasks(): Observable<Task[]> {
    return of([{taskName: 'adas'}]);
  }

  getTasksCount(): Observable<number> {
    return this.getTasks()
      .pipe(
        map(tasks => tasks.length)
      );
  }
}
