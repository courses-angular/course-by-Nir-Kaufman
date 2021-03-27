import {NgModule, ViewRef} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { TemplateRenderDirective } from './directives/template-render.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TemplateRenderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
