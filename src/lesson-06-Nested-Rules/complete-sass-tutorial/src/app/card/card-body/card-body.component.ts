import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardBodyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
