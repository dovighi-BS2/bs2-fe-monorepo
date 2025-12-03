import { AfterViewInit, Component, ContentChildren, Input, OnDestroy, QueryList } from '@angular/core';
import { Bs2DSStepNavigatorItemComponent } from '../bs2-ds-step-navigator-item/bs2-ds-step-navigator-item.component';

@Component({
  selector: 'bs2-ds-step-navigator-group',
  standalone: true,
  imports: [],
  templateUrl: './bs2-ds-step-navigator-group.component.html',
  styleUrl: './bs2-ds-step-navigator-group.component.scss',
})
export class Bs2DSStepNavigatorGroupComponent implements AfterViewInit, OnDestroy {
  @ContentChildren(Bs2DSStepNavigatorItemComponent) items: QueryList<Bs2DSStepNavigatorItemComponent> = new QueryList();

  @Input() activatedIndex = 0;
  @Input() auto = false;
  @Input() loop = false;
  @Input() timer = 5000;

  public interval: any;

  public ngAfterViewInit(): void {
    for (const [index, item] of this.items.toArray().entries())
      if (item.isActive || index === this.activatedIndex) {
        this.activatedIndex = index;
        item.isActive = true;
      }

    if (this.auto) this.interval = setInterval(() => this.next(), this.timer);
  }

  public ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  public goTo(index: number): void {
    this.activatedIndex = index;
    this.refresh();
    if (this.auto) {
      clearInterval(this.interval);
      this.interval = setInterval(() => this.next(), this.timer);
    }
  }

  public refresh(): void {
    for (const [index, item] of this.items.toArray().entries()) {
      // debugger;
      item.isActive = this.activatedIndex === index;
    }
  }

  public previous(): void {
    if (!this.loop && this.isFirst) return;
    this.goTo(this.isFirst ? this.items.length - 1 : this.activatedIndex - 1);
  }

  public next(): void {
    if (!this.loop && this.isLast) return;
    this.goTo(this.isLast ? 0 : this.activatedIndex + 1);
  }

  public get isFirst(): boolean {
    return this.activatedIndex <= 0;
  }

  public get isLast(): boolean {
    return this.activatedIndex >= this.items.length - 1;
  }
}
