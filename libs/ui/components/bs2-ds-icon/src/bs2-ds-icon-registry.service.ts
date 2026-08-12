import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, map, shareReplay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Bs2DSIconRegistryService {
  private readonly http = inject(HttpClient);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly cache = new Map<string, Observable<SafeHtml>>();

  get(name: string): Observable<SafeHtml> {
    if (!this.cache.has(name)) {
      const request = this.http
        .get(`/assets/icons/${name}.svg`, { responseType: 'text' })
        .pipe(
          map(svg => {
            const clean = svg
              .replace(/\s*width="[^"]*"/g, '')
              .replace(/\s*height="[^"]*"/g, '')
              .replace(/fill="[^"]*"/g, 'fill="currentColor"');
            return this.sanitizer.bypassSecurityTrustHtml(clean);
          }),
          shareReplay(1),
        );
      this.cache.set(name, request);
    }
    return this.cache.get(name)!;
  }
}
