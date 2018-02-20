import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[blue-color]'
})
export class BlueColor {
    constructor(private eltRef: ElementRef) {
        eltRef.nativeElement.style.color = 'brown';
    }
}