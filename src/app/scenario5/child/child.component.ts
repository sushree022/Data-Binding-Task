import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class Scenario5ChildComponent implements OnInit {
  @Output() public childevent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onclick(value) {
    this.childevent.emit(value);
  }

}
