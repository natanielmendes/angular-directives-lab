import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './shared/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './shared/better-highlight/better-highlight.directive';
import { HostBindingHighlightDirective } from './shared/host-binding-highlight/host-binding-highlight.directive';
import { UnlessDirective } from './shared/unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HostBindingHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
