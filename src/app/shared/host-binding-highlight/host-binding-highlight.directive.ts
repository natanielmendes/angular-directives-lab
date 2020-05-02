import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHostBindingHighlight]'
})
export class HostBindingHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appHostBindingHighlight') hightlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.backgroundColor = 'blue';
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.hightlightColor;
  }
  
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
