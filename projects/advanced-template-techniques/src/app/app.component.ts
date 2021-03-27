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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'advanced-template-techniques';

  /**
   * Set h2 with ngClass directive as a ViewContainer
   */
  @ViewChild(NgClass, { read: ViewContainerRef })
  h2ContainerRef: ViewContainerRef;

  /**
   * Set ng-container as a ViewContainer
   */
  @ViewChild('containerRef', { read: ViewContainerRef })
  containerRef: ViewContainerRef;

  /**
   * Use if there's one ng-template (no need reference in html like : "<ng-template #templateRef></ng-template");
   */
  @ViewChild(TemplateRef) template: TemplateRef<any>;

  /**
   * Use if there's more then one ng-template (need reference in html like : "<ng-template #templateRef></ng-template");
   */
  @ViewChild('templateRef', { read: TemplateRef })
  templateRef: TemplateRef<any>;
  /**
   * Dependency Injection of ViewContainerRef and get App-Root as a ViewContainerRef
   * @param viewContainer: ViewContainerRef
   */
  constructor(private viewContainer: ViewContainerRef) {}

  ngAfterViewInit(): void {
    console.log('View container', this.viewContainer);
    const embeddedView: EmbeddedViewRef<any> = this.template.createEmbeddedView(
      null
    );
    /**
     * Insert embeddedView to app-root viewContainerRef
     */
    // this.viewContainer.insert(embeddedView);
    /**
     * Insert embeddedView to ng-container viewContainerRef
     */
    // this.containerRef.insert(embeddedView);

    // Instead of using previous 2 line of code
    this.containerRef.createEmbeddedView(this.template);
  }
}
