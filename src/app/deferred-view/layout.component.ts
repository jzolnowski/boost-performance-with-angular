import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'deferred-view-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <p>
      <a routerLink="." routerLinkActive="selected-secondary">
        <span>Deferred Views</span>
      </a>
      |
      <a routerLink="with-placeholder" routerLinkActive="selected-secondary">
        <span>With Placeholder</span>
      </a>
      |
      <a routerLink="using-loading" routerLinkActive="selected-secondary">
        <span>Using Loading</span>
      </a>
      |
      <a routerLink="when-condition" routerLinkActive="selected-secondary">
        <span>When condition</span>
      </a>
      |
      <a routerLink="on-interaction" routerLinkActive="selected-secondary">
        <span>On Interaction</span>
      </a>
    </p>

    <router-outlet> </router-outlet>
  `,
})
export class DeferredViewLayoutComponent {}
