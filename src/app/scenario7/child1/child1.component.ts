import { Component, OnInit } from '@angular/core';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-scenario7child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Scenario7Child1Component implements OnInit {

  constructor(private service: ParentService) { }

  ngOnInit() {
  }
  log(value) {
    this.service.getdatafrom(value);
  }

}
