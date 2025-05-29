import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./components/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./components/auth/register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard/dashboard.component').then((m) => m.DashboardComponent),
    canActivate: [authGuard],
  },
  {
    path: 'bugs',
    loadComponent: () =>
      import('./components/bug/bug-list/bug-list.component').then((m) => m.BugListComponent),
    canActivate: [authGuard],
  },
  {
  path: 'bugs/create',
  loadComponent: () =>
    import('./components/bug/bug-create/bug-create.component').then(m => m.BugCreateComponent),
  canActivate: [authGuard]
},


  { path: '**', redirectTo: 'dashboard' },
];
