import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario4ChildComponent } from './child/child.component';
import { Scenario4ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    Scenario4ChildComponent,
    Scenario4ParentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Scenario4ChildComponent,
    Scenario4ParentComponent
  ],
})
export class Scenario4Module { }
