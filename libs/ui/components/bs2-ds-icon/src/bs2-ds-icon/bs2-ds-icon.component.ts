import { Component, computed, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { Bs2DSIconRegistryService } from '../bs2-ds-icon-registry.service';

@Component({
  selector: 'bs2-ds-icon',
  imports: [],
  template: `<span [style.width]="resolvedSize()" [style.height]="resolvedSize()" [innerHTML]="icon()"></span>`,
  styleUrl: './bs2-ds-icon.component.scss',
  host: {
    '[style.color]': 'color() || null',
  },
})
export class Bs2DSIconComponent {
  private readonly registry = inject(Bs2DSIconRegistryService);

  readonly name = input.required<string>();
  readonly color = input<string | null>(null);
  readonly size = input<string | number>(16);

  protected readonly resolvedSize = computed(() => {
    const size = this.size();
    if (typeof size === 'number') return `${size}px`;
    return isNaN(Number(size)) ? size : `${Number(size)}px`;
  });

  protected readonly icon = toSignal(
    toObservable(this.name).pipe(switchMap(name => this.registry.get(name))),
    { initialValue: '' },
  );
}
