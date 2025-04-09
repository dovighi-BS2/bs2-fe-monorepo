import { AfterViewInit, Component, ContentChildren, Input } from '@angular/core';
import { Bs2DSTabItemComponent } from '../bs2-ds-tab-item/bs2-ds-tab-item.component';

@Component({
  selector: 'bs2-ds-tab-group',
  standalone: true,
  imports: [Bs2DSTabItemComponent],
  templateUrl: './bs2-ds-tab-group.component.html',
  styleUrl: './bs2-ds-tab-group.component.scss',
})
export class Bs2DSTabGroupComponent implements AfterViewInit {
  @Input() testId?: string = '';
  @Input() selectedTab?: string = '';
  @Input() full?: boolean = false;
  @Input() align?: 'start' | 'center' | 'end' = 'start';

  @ContentChildren(Bs2DSTabItemComponent) tabItems: Bs2DSTabItemComponent[] = [];

  public block = 'bs2_ds_tab_group';

  ngAfterViewInit(): void {
    this.selectedTab && this.selectTab(this.selectedTab);
  }

  public selectTab(title: string) {
    for (const item of this.tabItems) item.isActive = title === item.title;
  }
}
