import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { ContextService } from './../../context/context.service';
import { contextToken } from './../../context/context.token';
import { ContextModel } from 'src/app/context/context.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.css'],
  providers: [ { provide: contextToken, useClass: ContextService } ]
})
export class FeatureOneComponent implements OnInit {
  @ViewChild('foInput',{read: ElementRef}) foInput: ElementRef;

  prop1$ = new Subject<string>();
  prop2$ = new Subject<boolean>();

  constructor(@Inject(contextToken) private context: ContextModel) { }

  ngOnInit() {
    /*
     * Here we register streams for the @Input properties on the child 
     * component we want to attach them to.  These registrations must be
     * aware of what the name of the @Input is in the child component and
     * the component tree for this instance of the context service only 
     * supports having singleton property names registered.  If any other
     * component registered a 'prop1' stream then that would overwrite 
     * this instance and the results would be unpredictable.
     * 
     * So this is a naive approach but at least shows the absolute basics
     * of how a di system could work.
     */
    this.context.registerKey('prop1', this.prop1$);
    this.context.registerKey('prop2', this.prop2$);
  }

  /*
   * These two functions just emit the next value to send to the child component
   * with basic Subjects.  Nothing special going on here.
   */

  onSetProp1() {
    this.prop1$.next((this.foInput.nativeElement as HTMLInputElement).value);
  }

  onSetProp2(e: Event) {
    this.prop2$.next((e.target as HTMLInputElement).value === 'T' ? true: false);
  }

}
