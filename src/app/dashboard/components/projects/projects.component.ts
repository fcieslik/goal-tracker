import {Component, OnInit} from '@angular/core';
import {ProjectsService} from '../../services/projects.service';
import {Observable} from 'rxjs';
import {Project} from '../../models/Task';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  currentProjects: Observable<Project[]>;

  constructor(private projectsService: ProjectsService) {
  }

  ngOnInit() {
    this.currentProjects = this.projectsService.getProjects();
  }

}
