import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './views/home';

export const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/blog',
    component: lazy(() => import('./views/blog')),
  },
  {
    path: '/blog/:id',
    component: lazy(() => import('./views/blog/post')),
  },
  {
    path: '**',
    component: lazy(() => import('./views/404')),
  },
];
