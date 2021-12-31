import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavbarComponent implements OnInit {
  @Input() ngClasses: string[] = [];

  constructor() {}

  ngOnInit(): void {}
}
