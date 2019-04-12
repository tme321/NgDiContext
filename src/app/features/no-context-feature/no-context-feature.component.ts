import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-no-context-feature',
  templateUrl: './no-context-feature.component.html',
  styleUrls: ['./no-context-feature.component.css']
})
export class NoContextFeatureComponent implements OnInit {
  @ViewChild('c1prop1Input',{read: ElementRef}) c1prop1Input: ElementRef;
  @ViewChild('c2prop1Input',{read: ElementRef}) c2prop1Input: ElementRef;
  @ViewChild('c2prop2Input',{read: ElementRef}) c2prop2Input: ElementRef;

  prop1 = '';
  prop2;
  val1: number;
  val2 = '';

  constructor() { }

  ngOnInit() {
  }

  onSetC1Prop1() {
    this.prop1 = (this.c1prop1Input.nativeElement as HTMLInputElement).value;
  }

  onSetC1Prop2(e: Event) {
    this.prop2 = (e.target as HTMLInputElement).value === 'T' ? true: false;
  }

  onSetC2Prop1() {
    this.val1 = Number((this.c2prop1Input.nativeElement as HTMLInputElement).value);
  }

  onSetC2Prop2() {
    this.val2 = (this.c2prop2Input.nativeElement as HTMLInputElement).value;
  }
}
