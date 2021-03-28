import { NgModule, ViewRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TemplateRenderDirective } from './directives/template-render.directive';
import { GridComponent } from './grid/grid.component';
import { UniversalComponent } from './universal/universal.component';
import { FormsModule } from '@angular/forms';
import { AddClassDirective } from './directives/add-class.directive';
import { CustomTemplateDirective } from './directives/custom-template.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TemplateRenderDirective,
    GridComponent,
    UniversalComponent,
    AddClassDirective,
    CustomTemplateDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
