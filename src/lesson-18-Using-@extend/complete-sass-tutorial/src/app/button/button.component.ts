import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ButtonComponent implements OnInit {
  @Input() ngClasses: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
