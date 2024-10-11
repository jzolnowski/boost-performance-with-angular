import { Routes } from '@angular/router';
import { PriorityLayoutComponent } from './priority/layout.component';
import { PlaceholderLayoutComponent } from './placeholder/layout.component';
import { ResponsiveLayoutComponent } from './responsive/layout.component';

export const ngOptimizedImageRoutes: Routes = [
  {
    path: '',
    redirectTo: 'priority',
    pathMatch: 'full',
  },
  {
    path: 'priority',
    component: PriorityLayoutComponent,
    loadChildren: () => import('./priority/priority.routes')
      .then(routes => routes.priorityRoutes),
  },
  {
    path: 'placeholder',
    component: PlaceholderLayoutComponent,
    loadChildren: () => import('./placeholder/placeholder.routes')
      .then(routes => routes.placeholderRoutes),
  },
  {
    path: 'responsive',
    component: ResponsiveLayoutComponent,
    loadChildren: () => import('./responsive/responsive.routes')
      .then(routes => routes.responsiveRoutes),
  },
];
