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
  @ViewChild('title') titleRef: ElementRef;
  @ViewChild('childRef', { read: ElementRef }) childRef: ElementRef;

  constructor(
    @Inject(ChangeDetectorRef) private view: ViewRef,
    private hostElement: ElementRef,
    private renderer: Renderer2
  ) {}

  /**
   * To get context for ViewRef
   */
  // constructor(@Inject(ChangeDetectorRef) private view: EmbeddedViewRef<any>) {
  // }

  ngAfterViewInit(): void {
    console.log('ViewRef', this.view);
    console.log('TitleRef', this.titleRef);
    console.log('Host element of the ElementRef', this.hostElement);
    // console.log(this.view.context);

    // TODO: Bad !!! Use ViewContainerRef.It still on ViewRef and Check Detection runs
    this.renderer.removeChild(
      this.hostElement.nativeElement,
      this.titleRef.nativeElement
    );

    this.renderer.removeChild(
      this.hostElement.nativeElement,
      this.childRef.nativeElement
    );
  }

  onClick(): void {}
}
