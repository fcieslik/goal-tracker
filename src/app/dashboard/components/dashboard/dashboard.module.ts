import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {TaskCalendarComponent} from '../task-calendar/task-calendar.component';
import {TaskOverviewsComponent} from '../task-overviews/task-overviews.component';
import {TaskStatisticsComponent} from '../task-statistics/task-statistics.component';
import {DashboardComponent} from './dashboard.component';
import {AppModule} from '../../../app.module';
import {DateComponent} from '../date/date.component';
import {ProjectsComponent} from '../projects/projects.component';


@NgModule({
  declarations: [DashboardComponent, TaskStatisticsComponent, TaskOverviewsComponent, TaskCalendarComponent, ProjectsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
