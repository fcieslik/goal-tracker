import {Injectable} from '@angular/core';
import {Project} from '../models/Task';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() {
  }

  getProjects(): Observable<Project[]> {
    return of(this.mockedProjects());
  }

  mockedProjects(): Project[] {
    return [
      {id: 1, projectName: 'Angular', priority: 'high'} as Project,
      {id: 2, projectName: 'React', priority: 'high'} as Project,
      {id: 3, projectName: 'Css/Html', priority: 'medium'} as Project,
      {id: 4, projectName: 'JS', priority: 'medium'} as Project
    ];
  }
}
