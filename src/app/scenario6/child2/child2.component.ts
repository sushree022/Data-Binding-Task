import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario6child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Scenario6Child2Component implements OnInit {
  @Input() public PassData;
  constructor() { }

  ngOnInit() {
  }

}
function newFunction(): string {
  return 'parentData';
}

