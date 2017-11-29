import { Directive, HostBinding, HostListener, transition } from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDirective {
    @HostBinding('class.hovered') isHovered = false;

    @HostListener('mouseenter') onMouseEnter() {
        this.isHovered = true;
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.isHovered = false;
    }
}