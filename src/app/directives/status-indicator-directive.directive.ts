import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStatusIndicator]',
})
export class StatusIndicatorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() set appStatusIndicator(status: string) {
    let color: string;

    switch (status) {
      case 'Not started':
        color = '#dc3545'; // equivalent to .bg-danger
        break;
      case 'In progress':
        color = '#ffc107'; // equivalent to .bg-warning
        break;
      case 'Completed':
        color = '#198754'; // equivalent to .bg-success
        break;
      default:
        color = '#6c757d'; // equivalent to .bg-secondary
    }

    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
