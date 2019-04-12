import { Component, Inject, Input, Optional } from '@angular/core';
import { ContextModel } from './../../context/context.model';
import { contextToken } from './../../context/context.token';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {
  @Input() contextName: string;

  @Input() prop1: string;
  @Input() prop2: boolean;

  constructor(@Optional() @Inject(contextToken) private context: ContextModel) { }

  ngAfterViewInit() {
    if(this.context) {
      if(this.contextName) {
        this.context.registerComponent(this.contextName, this);
      }
      else {
        this.context.getKey$<string>('prop1', this.contextName).subscribe(p1=>this.prop1 = p1);
        this.context.getKey$<boolean>('prop2', this.contextName).subscribe(p2=>this.prop2 = p2);
      }
    }
  }

}
