import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ylAddClass]',
})
export class AddClassDirective implements OnInit {
  @Input('ylAddClass') className: string;
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit(): void {
    this.renderer.addClass(this.hostElement.nativeElement, this.className);
  }
}
