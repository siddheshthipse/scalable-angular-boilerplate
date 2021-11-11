import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CachingComponent } from './components/caching/caching.component';
import { SettingsComponent } from './components/settings/settings.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        {
          path: 'workspace',
          component: WorkspaceComponent,
          data:{title:'Workspace | Dashboard'}
        },
        {
           path: 'caching',
           component: CachingComponent,
           data:{title:'Features | Dashboard'}
        },
        {
          path: 'settings',
          component: SettingsComponent,
          data:{title:'User Settings | Dashboard'}
       }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
