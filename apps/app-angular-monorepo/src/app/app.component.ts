import { Bs2DSStepNavigatorGroupComponent } from './../../../../libs/ui/components/bs2-ds-step-navigator/src/bs2-ds-step-navigator-group/bs2-ds-step-navigator-group.component';
import { Bs2DSSelectorsComponent } from '@bs2/design-system/components/bs2-ds-selectors';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Bs2DSStepNavigatorItemComponent } from 'libs/ui/components/bs2-ds-step-navigator/src/bs2-ds-step-navigator-item/bs2-ds-step-navigator-item.component';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [Bs2DSSelectorsComponent, Bs2DSStepNavigatorGroupComponent, Bs2DSStepNavigatorItemComponent],
})
export class AppComponent {
  title = 'app-angular-monorepo';

  public aprovacoes = [{ id: '1111' }, { id: '2222' }, { id: '3333' }, { id: '4444' }, { id: '5555' }];

  public control = new FormControl([], []);
}
