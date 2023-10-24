import { Directive, ElementRef, Renderer2 } from '@angular/core';
@Directive({
  selector: '[appNewDirective]'
})
export class NewDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'lightblue');
  }
}
