import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { Bs2DSIconRegistryService } from '../bs2-ds-icon-registry.service';

@Component({
  selector: 'bs2-ds-icon',
  imports: [],
  template: `<span [innerHTML]="icon()"></span>`,
  styleUrl: './bs2-ds-icon.component.scss',
})
export class Bs2DSIconComponent {
  private readonly registry = inject(Bs2DSIconRegistryService);

  readonly name = input.required<string>();

  protected readonly icon = toSignal(
    toObservable(this.name).pipe(switchMap(name => this.registry.get(name))),
    { initialValue: '' },
  );
}
