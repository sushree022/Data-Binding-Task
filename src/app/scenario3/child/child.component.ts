import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3child',
  templateUrl: `./child.component.html`,
  styleUrls: ['./child.component.css']
})
export class Scenario3ChildComponent implements OnInit {
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
