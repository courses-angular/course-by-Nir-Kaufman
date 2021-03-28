import {
  Directive,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ylCustomTemplate]',
})
export class CustomTemplateDirective implements OnInit {
  constructor(
    private template: TemplateRef<any>,
    private hostViewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.hostViewContainer.createEmbeddedView(this.template);
  }
}
