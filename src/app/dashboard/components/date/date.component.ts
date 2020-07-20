import { Component, OnInit } from '@angular/core';
import {DateService} from './date.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  currentTime: Observable<string>;

  constructor(private dateService: DateService) { }

  ngOnInit() {
    this.currentTime = this.dateService.getCurrentTime();
  }

}
