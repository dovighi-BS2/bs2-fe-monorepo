import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentDividerComponent } from './content-divider.component';

describe('ContentDividerComponent', () => {
  const testId = 'progress_bar__test_id';

  let component: ContentDividerComponent;
  let fixture: ComponentFixture<ContentDividerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentDividerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentDividerComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
