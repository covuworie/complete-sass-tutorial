import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class CardTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
