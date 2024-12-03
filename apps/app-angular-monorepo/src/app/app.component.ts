import { Component, inject, OnInit } from '@angular/core';
import { FeedbackContainerComponent, FeedbackContainerService } from '@bs2-fe-monorepo/ui/components/feedback';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [FeedbackContainerComponent],
})
export class AppComponent implements OnInit {
  title = 'app-angular-monorepo';
  feedbackService = inject(FeedbackContainerService);

  ngOnInit(): void {
    setTimeout(() => {
      this.feedbackService.error({ message: 'hjiuahaaiuha jaoiuaiuoia', duration: 10000 });
    }, 500);
    setTimeout(() => {
      this.feedbackService.info({ message: 'hjiuahaaiuha jaoiuaiuoia', duration: 10000 });
    }, 1000);
    setTimeout(() => {
      this.feedbackService.success({ message: 'hjiuahaaiuha jaoiuaiuoia', duration: 6000 });
    }, 1500);
    setTimeout(() => {
      this.feedbackService.attention({ message: 'hjiuahaaiuha jaoiuaiuoia', duration: 4000 });
    }, 2000);
    setTimeout(() => {
      this.feedbackService.attention({ message: 'hjiuahaaiuha jaoiuaiuoia', duration: 4500 });
    }, 2500);
    setTimeout(() => {
      this.feedbackService.success({ message: 'hjiuahaaiuha jaoiuaiuoia', duration: 5000 });
    }, 3000);
    setTimeout(() => {
      this.feedbackService.success({ message: 'hjiuahaaiuha jaoiuaiuoia', duration: 4000 });
    }, 3500);
    setTimeout(() => {
      this.feedbackService.error({ message: 'hjiuahaaiuha jaoiuaiuoia', duration: 5000 });
    }, 4000);
  }
}
