import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bs2-ds-row]',
  standalone: true,
})
export class Bs2DSRowDirective implements OnInit {
  @Input() gap = '30px';
  @Input() columns = 12;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    this.elRef.nativeElement.classList.add('bs2_ds_row');

    !!this.gap && this.elRef.nativeElement.style.setProperty('--bs2_ds_grid__gap', this.gap);
    !!this.columns && this.elRef.nativeElement.style.setProperty('--bs2_ds_grid__max_column', this.columns);
  }
}
