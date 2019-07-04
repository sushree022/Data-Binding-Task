import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario3ChildComponent } from './child/child.component';
import { Scenario3ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    Scenario3ChildComponent,
    Scenario3ParentComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    Scenario3ChildComponent,
    Scenario3ParentComponent
  ]
})
export class Scenario3Module { }
