import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { contextToken } from '../../../context/context.token';
import { ContextModel } from '../../../context/context.model';
import { ChildTwoComponent } from './../../../shared/child-two/child-two.component';

@Component({
  selector: 'app-middle-two',
  templateUrl: './middle-two.component.html',
  styleUrls: ['./middle-two.component.css']
})
export class MiddleTwoComponent implements OnInit {
  @ViewChild(ChildTwoComponent) c2Comp: ChildTwoComponent;

  constructor(@Inject(contextToken) private context: ContextModel) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /*
     * This might be the place the api could be worked on the most
     * since here we are requiring the direct parent component to grab
     * the instance of the child component that should register with 
     * the context service.
     * 
     * But for an initial version just to demo the idea this works fine 
     * and doesn't require any more refinement to demonstrate the method.
     */
    this.context.registerComponent('child2', this.c2Comp);
  }
}
