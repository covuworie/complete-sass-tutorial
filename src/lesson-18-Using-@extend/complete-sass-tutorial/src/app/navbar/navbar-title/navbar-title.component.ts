import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar-title',
  templateUrl: './navbar-title.component.html',
  styleUrls: ['./navbar-title.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavbarTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
