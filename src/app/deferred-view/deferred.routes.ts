import { Routes } from '@angular/router';
import { DeferredViewComponent } from './components/deferred-view.component';

export const deferredRoutes: Routes = [
  {
    path: '',
    component: DeferredViewComponent,
  },
  {
    path: 'with-placeholder',
    loadComponent: () => import('./components/with-placeholder.component').then(c => c.WithPlaceholderViewComponent),
  },
  {
    path: 'using-loading',
    loadComponent: () => import('./components/using-loading.component').then(c => c.UsingLoadingComponent),
  },
  {
    path: 'when-condition',
    loadComponent: () => import('./components/when-condition.component').then(c => c.WhenConditionComponent),
  },
  {
    path: 'on-interaction',
    loadComponent: () => import('./components/on-interaction.component').then(c => c.OnInteractionComponent),
  },
];

