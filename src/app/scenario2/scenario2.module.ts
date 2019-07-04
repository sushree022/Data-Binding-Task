import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scenario2UsertextComponent } from './usertext/usertext.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations:
  [Scenario2UsertextComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Scenario2UsertextComponent
  ]
})
export class Scenario2Module { }
