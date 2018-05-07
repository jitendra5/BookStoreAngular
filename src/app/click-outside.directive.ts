import {
  Directive,
  ElementRef,
  Output,
  HostListener,
  EventEmitter
} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  constructor(private el: ElementRef) {}

  @Output() public appclickOutside = new EventEmitter();
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.el.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.appclickOutside.emit(null);
    }
  }
}
