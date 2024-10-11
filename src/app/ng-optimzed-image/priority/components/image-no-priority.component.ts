import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'image-no-priority',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <h2>Normal image with no Priority</h2>
    <div class="d-flex">
      <div>
        <img [ngSrc]="'/assets/angular.webp'" width="200" height="200" alt="" />
      </div>
      <pre class="code">
        &lt;img
          src="/assets/angular.webp"
          width="200"
          height="200"
          />
      </pre>
    </div>
  `,
})
export class ImageWithNoPriorityComponent {}
