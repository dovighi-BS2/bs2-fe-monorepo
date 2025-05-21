import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSTabGroupComponent } from './bs2-ds-tab-group.component';
import { By } from '@angular/platform-browser';
import { Bs2DSTabItemComponent } from '../bs2-ds-tab-item/bs2-ds-tab-item.component';
import { Component } from '@angular/core';

@Component({
  selector: 'mock-tab',
  standalone: true,
  imports: [Bs2DSTabGroupComponent, Bs2DSTabItemComponent],
  template: `<bs2-ds-tab-group>
    <bs2-ds-tab-item title="Tab 1"></bs2-ds-tab-item>
    <bs2-ds-tab-item title="Tab 2"></bs2-ds-tab-item>
    <bs2-ds-tab-item title="Tab 3"></bs2-ds-tab-item>
  </bs2-ds-tab-group>`,
})
class MockTabComponent {}

describe('Bs2DSTabGroupComponent', () => {
  let bs2DSTabGroupComponent: Bs2DSTabGroupComponent;
  let fixture: ComponentFixture<MockTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSTabGroupComponent, Bs2DSTabItemComponent, MockTabComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MockTabComponent);
    bs2DSTabGroupComponent = fixture.debugElement.query(By.directive(Bs2DSTabGroupComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('[ngAfterViewInit] should execute right', () => {
    bs2DSTabGroupComponent.selectedTab = 'Tab 2';
    bs2DSTabGroupComponent.ngAfterViewInit();
    fixture.detectChanges();

    let tabItems = fixture.debugElement.queryAll(By.directive(Bs2DSTabItemComponent));
    let tab1 = tabItems[0].componentInstance;
    let tab2 = tabItems[1].componentInstance;
    let tab3 = tabItems[2].componentInstance;

    expect(tab1.isActive).toBe(false);
    expect(tab2.isActive).toBe(true);
    expect(tab3.isActive).toBe(false);

    bs2DSTabGroupComponent.selectedTab = 'Tab 3';
    bs2DSTabGroupComponent.ngAfterViewInit();
    fixture.detectChanges();

    tabItems = fixture.debugElement.queryAll(By.directive(Bs2DSTabItemComponent));
    tab1 = tabItems[0].componentInstance;
    tab2 = tabItems[1].componentInstance;
    tab3 = tabItems[2].componentInstance;

    expect(tab1.isActive).toBe(false);
    expect(tab2.isActive).toBe(false);
    expect(tab3.isActive).toBe(true);
  });

  it('[selectTab] should execute right', () => {
    bs2DSTabGroupComponent.selectTab('Tab 2');
    fixture.detectChanges();

    let tabItems = fixture.debugElement.queryAll(By.directive(Bs2DSTabItemComponent));
    let tab1 = tabItems[0].componentInstance;
    let tab2 = tabItems[1].componentInstance;
    let tab3 = tabItems[2].componentInstance;

    expect(tab1.isActive).toBe(false);
    expect(tab2.isActive).toBe(true);
    expect(tab3.isActive).toBe(false);

    bs2DSTabGroupComponent.selectTab('Tab 3');
    fixture.detectChanges();

    tabItems = fixture.debugElement.queryAll(By.directive(Bs2DSTabItemComponent));
    tab1 = tabItems[0].componentInstance;
    tab2 = tabItems[1].componentInstance;
    tab3 = tabItems[2].componentInstance;

    expect(tab1.isActive).toBe(false);
    expect(tab2.isActive).toBe(false);
    expect(tab3.isActive).toBe(true);
  });
});
