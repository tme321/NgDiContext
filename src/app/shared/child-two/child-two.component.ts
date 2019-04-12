import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent {
  @Input() val1: number;
  @Input() val2: string;
}
