import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario6child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Scenario6Child1Component implements OnInit {
  @Output() child1event = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onclick(value) {
    this.child1event.emit(value);
  }
}
