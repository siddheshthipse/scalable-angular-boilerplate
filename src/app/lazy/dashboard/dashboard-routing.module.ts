import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CachingComponent } from './components/caching/caching.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        {
          path: 'workspace',
          component: WorkspaceComponent
        },
        {
           path: 'caching',
           component: CachingComponent
        }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
