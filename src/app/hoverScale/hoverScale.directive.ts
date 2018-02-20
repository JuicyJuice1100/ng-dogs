import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[hover-scale]'
})
export class HoverScale {
    constructor(private eltRef: ElementRef) {

    }

    @Input() 'hover-scale': Number;
    @HostListener('mouseenter')
    onMouseEnter() {
        this.eltRef.nativeElement.style.transform = `scale(${this['hover-scale']})`;
        this.eltRef.nativeElement.style.zIndex = 999;
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.eltRef.nativeElement.style.transform = "scale(1)";
        this.eltRef.nativeElement.style.zIndex = 1;
    }
}