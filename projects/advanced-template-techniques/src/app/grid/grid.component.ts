import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'yl-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() headers: string[];
  @Input() data: any[];
  @ContentChild(TemplateRef) rowTemplate;
  constructor() {}

  ngOnInit(): void {}
}
