import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, DoCheck {
  ngDoCheck(): void {
    console.log('Child component checked!');
  }

  constructor() {}

  ngOnInit(): void {}
}
