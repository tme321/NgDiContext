import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ContextService } from './../../context/context.service';
import { contextToken } from './../../context/context.token';
import { ContextModel } from 'src/app/context/context.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-feature-two',
  templateUrl: './feature-two.component.html',
  styleUrls: ['./feature-two.component.css'],
  providers: [ { provide: contextToken, useClass: ContextService } ]
})
export class FeatureTwoComponent implements OnInit {
  @ViewChild('c1prop1Input',{read: ElementRef}) c1prop1Input: ElementRef;
  @ViewChild('c2prop1Input',{read: ElementRef}) c2prop1Input: ElementRef;
  @ViewChild('c2prop2Input',{read: ElementRef}) c2prop2Input: ElementRef;

  prop1ForChild1$ = new Subject<string>();
  prop2ForChild1$ = new Subject<boolean>();

  prop1ForChild2$ = new Subject<number>();
  prop2ForChild2$ = new Subject<string>();

  constructor(@Inject(contextToken) private context: ContextModel) { }

  ngOnInit() {
    /*
     * This is the same registration block as before.  However, this time
     * we are registering the values against a component name that can be 
     * resolved by the service later to tie a particular component and a 
     * set of streams together correctly.
     * 
     * I feel like this part of the api could use some more work.  I wouldn't
     * call this production ready.  But it is a good start and at least 
     * showcases the idea. 
     */
    this.context.registerKey('prop1', this.prop1ForChild2$, 'child2', 'val1');
    this.context.registerKey('prop2', this.prop2ForChild2$, 'child2', 'val2');

    this.context.registerKey('prop1', this.prop1ForChild1$, 'child1');
    this.context.registerKey('prop2', this.prop2ForChild1$, 'child1');
  }

  /*
   * Again, just send the next values to the components through the streams.
   */

  onSetC1Prop1() {
    this.prop1ForChild1$.next((this.c1prop1Input.nativeElement as HTMLInputElement).value);
  }

  onSetC1Prop2(e: Event) {
    this.prop2ForChild1$.next((e.target as HTMLInputElement).value === 'T' ? true: false);
  }

  onSetC2Prop1() {
    this.prop1ForChild2$.next(Number((this.c2prop1Input.nativeElement as HTMLInputElement).value));
  }

  onSetC2Prop2() {
    this.prop2ForChild2$.next((this.c2prop2Input.nativeElement as HTMLInputElement).value);
  }
}
