import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';

@NgModule({
  declarations: [ChildOneComponent, ChildTwoComponent ],
  imports: [
    CommonModule
  ],
  exports:[ChildOneComponent, ChildTwoComponent ]
})
export class SharedModule { }
