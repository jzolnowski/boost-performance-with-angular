import { Routes } from '@angular/router';
import { deferredRoutes } from './deferred-view/deferred.routes';
import { DeferredViewLayoutComponent } from './deferred-view/layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'deferred-views',
    pathMatch: 'full',
  },
  {
    path: 'deferred-views',
    component: DeferredViewLayoutComponent,
    children: deferredRoutes,
  },
  {
    path: 'ng-optimized-image',
    loadComponent: () => import('./ng-optimzed-image/layout.component').then(c => c.NgOptimzedImageLayoutComponent),
    loadChildren: () => import('./ng-optimzed-image/ng-otimized-image.routes').then(r => r.ngOptimizedImageRoutes),
  },
  {
    path: 'change-detection',
    loadComponent: () => import('./change-detection/change-detection.component').then(c => c.ChangeDetectionComponent),
  },
];
