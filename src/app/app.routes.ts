import { Routes } from '@angular/router';
import { NgOptimzedImageLayoutComponent } from './ng-optimzed-image/layout.component';
import { deferredRoutes } from './deferred-view/deferred.routes';
import { ngOptimizedImageRoutes } from './ng-optimzed-image/ng-otimized-image.routes';
import { DeferredViewLayoutComponent } from './deferred-view/layout.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

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
    component: NgOptimzedImageLayoutComponent,
    children: ngOptimizedImageRoutes,
  },
  {
    path: 'change-detection',
    component: ChangeDetectionComponent,
  },
];
