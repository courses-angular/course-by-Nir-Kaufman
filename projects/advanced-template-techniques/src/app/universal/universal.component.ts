import {
  Component,
  ContentChild,
  DoCheck,
  EmbeddedViewRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'yl-universal',
  templateUrl: './universal.component.html',
  styleUrls: ['./universal.component.scss'],
})
export class UniversalComponent implements OnInit {
  @ContentChild(TemplateRef) contentTemplate: TemplateRef<any>;
  @Output() onChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() data: any;

  @HostListener('input', ['$event']) onInput(e): void {
    if (e.data) {
      this.onChange.emit(e.data);
    }
  }
  @HostListener('click', ['$event']) onClickEmit(e): void {
    console.log(this.contentTemplate);
    this.onClick.emit(this.data);
  }
  constructor() {}

  ngOnInit(): void {}
}
