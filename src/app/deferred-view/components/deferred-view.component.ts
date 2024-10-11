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
        src="https://via.assets.so/game.png?&q=75&w=1250&h=600&fit=fill"
        alt="Hero Image"
      />
      <app-images></app-images>
    </div>
  `,
})
export class DeferredViewComponent {}
