import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureOneComponent } from './feature-one.component';
import { MiddleOneComponent } from './middle-one/middle-one.component';

@NgModule({
  declarations: [ FeatureOneComponent, MiddleOneComponent ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ FeatureOneComponent ]
})
export class FeatureOneModule { }
