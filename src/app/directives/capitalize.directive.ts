import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private el: ElementRef) { 

  }

  ngOnInit() {
    const oldString = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = oldString.charAt(0).toUpperCase() + oldString.slice(1)
  }
}
