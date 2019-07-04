import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario4child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Scenario4ChildComponent implements OnInit {

  @Output() public childevent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
 onclick(value) {
 this.childevent.emit(value);
 }
}
