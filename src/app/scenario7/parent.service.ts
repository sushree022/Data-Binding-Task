import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  public Data: Subject<any>;

  constructor() {
    this.Data = new Subject();
  }
  getdatafrom(value) {
    this.Data.next(value);
  }
}
