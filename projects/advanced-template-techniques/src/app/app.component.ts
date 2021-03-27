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
  ViewChild,
  ViewRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'advanced-template-techniques';

  constructor() {}

  ngAfterViewInit(): void {}

  onClick(): void {}
}
