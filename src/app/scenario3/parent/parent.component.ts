import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario3parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class Scenario3ParentComponent implements OnInit {
  public info = '';
  constructor() { }

public onclick(value) {
  this.info = value;
}
  ngOnInit() {
  }

}
