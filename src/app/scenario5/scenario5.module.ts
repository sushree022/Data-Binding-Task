import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario5ChildComponent } from './child/child.component';
import { Scenario5ParentComponent } from './parent/parent.component';
import { Scenario5GrandpaComponent } from './grandpa/grandpa.component';

@NgModule({
  declarations: [
    Scenario5ChildComponent,
    Scenario5ParentComponent,
    Scenario5GrandpaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Scenario5ChildComponent,
    Scenario5ParentComponent,
    Scenario5GrandpaComponent,
  ]
})
export class Scenario5Module { }
