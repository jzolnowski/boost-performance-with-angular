import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ImagesComponent } from './images.component';

@Component({
  selector: 'deferred-view',
  standalone: true,
  imports: [NgOptimizedImage, ImagesComponent],
  template: `
    <div style="display: flex; flex-direction: column; gap: 25px;">
      <img
        [width]="1250"
        [height]="500"
        [ngSrc]="'img.webp?q=85&w=1250&h=500'"
        ngSrcset="200w, 300w, 500w"
        sizes="
          200px,
          (min-width: 200px) 300px,
          (min-width: 500px) 500px,
          (min-width: 960px) 1200px
        "
        alt="Hero Image"
        placeholder
        priority
      />
      <app-images></app-images>
    </div>
  `,
})
export class DeferredViewComponent {}
