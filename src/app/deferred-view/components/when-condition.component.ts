import { Component, signal } from '@angular/core';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'deferred-view',
  standalone: true,
  imports: [ImagesComponent],
  template: `
    <div style="display: flex; flex-direction: column; gap: 25px">
      <app-images></app-images>
      @if (!showMore()) {
        <button style="padding: 10px 0; width: 10%;" (click)="onShowMore()">Show more</button>
      }
      @defer (when showMore()) {
        <app-images></app-images>
        <app-images></app-images>
      }
    </div>
  `,
})
export class WhenConditionComponent {
  readonly showMore = signal(false);

  onShowMore(): void {
    this.showMore.update(value => !value);
  }
}
