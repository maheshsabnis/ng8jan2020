import { Directive, Input, ElementRef, Renderer, HostListener  } from '@angular/core';

@Directive({
  selector: '[setColor]' // attribute directive 
})
export class ColorDirective {
   @Input('setColor') setColor: string;

   // ElementRef and Renderer will be resolbed by BrowserModule
   constructor(private ele: ElementRef, private renderer: Renderer){}

   // logic method
    private applyColor(color: string) : void {
      // P1: the element to be affected using directive
      // P2: the style to sete for element
      // P3: value of the style
        this.renderer.setElementStyle(this.ele.nativeElement, 
           'backgroundColor', color);
    }
   // event methods tom execute logic 

   @HostListener('mouseenter')
   onmouseenter(): void {
     this.applyColor(this.setColor || 'cyan');
   }
   @HostListener('mouseleave')
   onmouseleave(): void {
    this.applyColor(null);
   }


}