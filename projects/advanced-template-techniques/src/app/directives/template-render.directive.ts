import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ylTemplateRender]',
})
export class TemplateRenderDirective implements OnChanges {
  @Input('ylTemplateRender') template: TemplateRef<any>;
  constructor(private viewContainer: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.viewContainer.createEmbeddedView(this.template);
  }
}
