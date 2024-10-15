import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-images',
  imports: [NgOptimizedImage],
  standalone: true,
  template: `
    <div style="display: flex; gap: 25px">
      @for(image of list; track $index) {
        <img
          [ngSrc]="image"
          ngSrcset="50w, 100w, 300w"
          sizes="
            50px,
            (min-width: 300px) 100px,
            (min-width: 500px) 300px,
            (min-width: 960px) 100vw
          "
          width="400"
          height="200"
          alt="Smaller Images"
          priority
          placeholder
        />
      }
    </div> `,
})
export class ImagesComponent {
  list = Array(3).fill('img.webp?q=85&w=400&h=200');
}
