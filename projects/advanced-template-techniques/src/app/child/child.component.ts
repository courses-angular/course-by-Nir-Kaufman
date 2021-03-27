import { Component, DoCheck, OnInit } from '@angular/core';
import { users } from '../data/users.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit, DoCheck {
  users = users;
  headers: string[] = ['id', 'name', 'age'];
  ngDoCheck(): void {
    console.log('Child component checked!');
  }

  constructor() {}

  ngOnInit(): void {}
}
