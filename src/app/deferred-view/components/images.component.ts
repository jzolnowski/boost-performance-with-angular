import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  standalone: true,
  template: `
    <div style="display: flex; gap: 25px">
      @for(image of list; track $index) {
        <img [src]="image" width="400" height="200" alt="Smaller Images" />
      }
    </div> `,
})
export class ImagesComponent {
  list = Array(3).fill('https://place-hold.it/400x200');
}
