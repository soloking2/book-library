import { Routes } from '@angular/router';
import { bookDetailResolver } from './pages/container/home/resolvers/book-detail.resolver';

export const APP_BASE_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/container/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  {
    path: 'home/book/:workId',
    loadComponent: () =>
      import(
        './pages/container/home/container/book-detail/book-detail.component'
      ).then((c) => c.BookDetailComponent),
    resolve: {
      book: bookDetailResolver,
    },
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
