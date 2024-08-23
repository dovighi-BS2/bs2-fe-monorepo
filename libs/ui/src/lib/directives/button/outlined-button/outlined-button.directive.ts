import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[outlined-button]',
  standalone: true,
})
export class OutlinedButtonDirective implements OnInit {
  @Input('aria-label') ariaLabel = '';
  @Input('aria-disabled') ariaDisabled = '';
  @Input() tabindex = 0;

  constructor(public el: ElementRef) {
    this.el.nativeElement.classList.add('button');
    this.el.nativeElement.classList.add('outlined');
    this.el.nativeElement.classList.add('primary');
  }

  ngOnInit(): void {
    if (this.ariaDisabled !== 'true' && !this.ariaLabel.trim().length)
      throw new Error('insira o atributo [aria-label].');

    if (this.ariaDisabled === 'true' && this.ariaLabel.trim().length)
      throw new Error('Remova o atributo [aria-label].');
  }
}
