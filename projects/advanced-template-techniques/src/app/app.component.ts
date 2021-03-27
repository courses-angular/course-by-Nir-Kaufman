import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EmbeddedViewRef,
  Inject,
  Optional,
  Renderer2,
  SkipSelf,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { UserInterface } from './data/user.interface';
import { users } from './data/users.interface';

@Component({
  selector: 'yl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'advanced-template-techniques';
  @ViewChild('container', { read: ViewContainerRef })
  containerRef: ViewContainerRef;

  /**
   * TemplateRef<any> - context
   */
  @ViewChild('userTemplate', { read: TemplateRef })
  userTemplateRef: TemplateRef<{ user: UserInterface }>;

  @ViewChild('userTemplate2', { read: TemplateRef })
  userTemplateRef2: TemplateRef<{
    user: UserInterface;
    index: number;
    firstUser: boolean;
    lastUser: boolean;
  }>;

  users: UserInterface[] = users;
  constructor() {}

  ngAfterViewInit(): void {
    this.users.forEach((user) => {
      this.containerRef.createEmbeddedView(this.userTemplateRef, { user });
    });
    for (let i = 0; i < this.users.length; i++) {
      const currentUser = this.users[i];
      const index = i;
      this.containerRef.createEmbeddedView(this.userTemplateRef2, {
        user: currentUser,
        index,
        firstUser: i === 0,
        lastUser: i === this.users.length - 1,
      });
    }
  }
}
