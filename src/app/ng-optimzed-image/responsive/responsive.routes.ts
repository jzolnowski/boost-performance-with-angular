import { Routes } from '@angular/router';
import { OutOfBoxComponent } from './components/out-of-box.component';

export const responsiveRoutes: Routes = [
  {
    path: '',
    redirectTo: 'out-of-box',
    pathMatch: 'full',
  },
  {
    path: 'out-of-box',
    component: OutOfBoxComponent,
  },
  {
    path: 'with-80vw',
    loadComponent: () => import('./components/with-fixed-size.component')
      .then(c => c.With80vwComponent),
  },
  {
    path: 'custom-src-set',
    loadComponent: () => import('./components/custom-src-set.component')
      .then(c => c.CustomSrcSetComponent),
  },
  {
    path: 'two-cols',
    loadComponent: () => import('./components/two-cols.component')
      .then(c => c.TwoColsComponent),
  },
];

