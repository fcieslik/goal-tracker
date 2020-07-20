import {Injectable} from '@angular/core';
import {interval, of, timer} from 'rxjs';
import {map, share, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() {
  }

  getCurrentTime() {
    return timer(0, 10000).pipe(
      map(() => this.currentDate()),
      shareReplay(1));
  }

  private currentDate(): string {
    return new Date().toLocaleDateString();
  }
}
