import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHightlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}