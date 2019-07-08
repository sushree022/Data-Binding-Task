import { Component, OnInit } from '@angular/core';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-scenario7child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Scenario7Child2Component implements OnInit {
  public data1 = '';

  constructor(private service: ParentService) {
    this.service.Data.subscribe(
      data => {
        console.log(data);
        this.data1 = data;
      });
  }

  ngOnInit() {
  }

}
