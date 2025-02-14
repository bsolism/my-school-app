import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {
        path: 'inicio',
        component: HomeComponent,
    },
    {
        path: 'register',
        loadChildren: () =>
          import('./features/register/register.routes').then(
            (x) => x.RegisterRoutes
          ),
    },
    {
      path: 'setting',
      loadChildren: () =>
        import('./features/settings/course.routes').then(
          (x) => x.CoursesRoutes
        ),
    }
];
