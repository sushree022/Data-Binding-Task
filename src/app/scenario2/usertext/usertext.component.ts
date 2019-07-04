import { Component, OnInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-scenario2usertext',
  templateUrl: './usertext.component.html',
  styleUrls: ['./usertext.component.css']
})
export class Scenario2UsertextComponent implements OnInit {
  public name = '';
  constructor() { }

  ngOnInit() {
  }

}
