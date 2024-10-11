import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'image-with-priority',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `<h2>Normal image with Priority</h2>
    <div class="d-flex">
      <div>
        <img
          [ngSrc]="'/assets/angular.webp'"
          width="200"
          height="200"
          fetchpriority="high"
          alt=""
        />
      </div>
      <pre class="code">
        &lt;img
          src="/assets/angular.webp"
          width="200"
          height="200"
          fetchpriority="high"
          />
      </pre>
    </div> `,
})
export class ImageWithPriorityComponent {}
