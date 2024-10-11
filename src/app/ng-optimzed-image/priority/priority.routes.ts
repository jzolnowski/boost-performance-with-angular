import { Routes } from '@angular/router';
import { ImageWithNoPriorityComponent } from './components/image-no-priority.component';

export const priorityRoutes: Routes = [
  {
    path: '',
    redirectTo: 'image-no-priority',
    pathMatch: 'full',
  },
  {
    path: 'image-no-priority',
    component: ImageWithNoPriorityComponent,
  },
  {
    path: 'image-with-priority',
    loadComponent: () => import('./components/image-with-priority.component')
      .then((m) => m.ImageWithPriorityComponent),
  },
  {
    path: 'ng-img-with-priority',
    loadComponent: () => import('./components/ng-img-with-priority.component')
      .then((m) => m.NgImgWithPriorityComponent),
  },
  {
    path: 'lcp-ng-img-wo-priority',
    loadComponent: () => import('./components/lcp-ng-img-wo-priority.component')
      .then((m) => m.LcpNgImgWOPriorityComponent),
  },
];

