import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureTwoComponent } from './feature-two.component';
import { MiddleTwoComponent } from './middle-two/middle-two.component';
import { LayoutTwoComponent } from './layout-two/layout-two.component';

@NgModule({
  declarations: [ FeatureTwoComponent, MiddleTwoComponent, LayoutTwoComponent ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ FeatureTwoComponent ]
})
export class FeatureTwoModule { }
