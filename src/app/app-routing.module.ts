import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './pages/error404/error404/error404.component';
import { SampleComponent } from './sample/sample.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { VerifyUserGuard } from './shared/guards/verify-user.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./lazy/auth/auth.module').then((m) => m.AuthModule),
    data:{title:'Welcome to ProjectX'}
  },
  {
    path: '',
    loadChildren: () =>
      import('./lazy/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    data:{title:'Dashboard | ProjectX'},
    canActivate:[AuthGuard]
  },
  {
    path:'sample',
    component:SampleComponent,
    data:{title:'Sample'},
    canActivate:[VerifyUserGuard]
  },
  {
    path:'**',
    component:Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
