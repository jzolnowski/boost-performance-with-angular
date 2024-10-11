import { Routes } from '@angular/router';
import { LowResolutionPlaceholderComponent } from './components/low-resolution-placeholder.component';

export const placeholderRoutes: Routes = [
  {
    path: '',
    redirectTo: 'low-resolution-placeholder',
    pathMatch: 'full',
  },
  {
    path: 'low-resolution-placeholder',
    component: LowResolutionPlaceholderComponent,
  },
  {
    path: 'low-resolution-base64-placeholder',
    loadComponent: () => import('./components/low-resolution-base64-placeholder.component')
      .then(c => c.LowResolutionBase64PlaceholderComponent),
  },
  {
    path: 'low-resolution-base64-placeholder-with-config',
    loadComponent: () => import('./components/low-resolution-base64-placeholder-config.component')
      .then(c => c.LowResolutionBase64PlaceholderConfigComponent),
  },
];


