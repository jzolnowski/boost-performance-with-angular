import { Component } from '@angular/core';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'deferred-view',
  standalone: true,
  imports: [ImagesComponent],
  template: `
    <div style="display: flex; flex-direction: column; gap: 25px">
      <img
        width="1250"
        height="600"
        src="https://place-hold.it/1250x600"
        alt="Hero Image"
      />
      <app-images></app-images>
    </div>
  `,
})
export class DeferredViewComponent {}
