import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-scenario5parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class Scenario5ParentComponent implements OnInit {
  @Output() public parentevent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  pass(value) {
    this.parentevent.emit(value);

  }
}
