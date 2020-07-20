import {Component, OnInit} from '@angular/core';
import {TaskOverviewsService} from '../../services/task-overviews.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-task-overviews',
  templateUrl: './task-overviews.component.html',
  styleUrls: ['./task-overviews.component.scss']
})
export class TaskOverviewsComponent implements OnInit {

  subscription = new Subscription();
  tasksInProgress = 0;

  constructor(private taskOverviewsService: TaskOverviewsService) {
  }

  ngOnInit() {
    this.subscription.add(this.taskOverviewsService.getTasksCount()
      .subscribe(numberOfTasks => this.tasksInProgress = numberOfTasks));
  }

}
