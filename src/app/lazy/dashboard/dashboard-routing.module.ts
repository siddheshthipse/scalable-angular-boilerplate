import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { CachingComponent } from './components/caching/caching.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'workspace',
        component:WorkspaceComponent,
        pathMatch:'full',
        data: {
          title: 'Workspace | Dashboard',
          breadcrumb: [
            {
              label: 'Dashboard / Workspace',
              url: ''
            }
          ]
        }
      },
      {
        path:'admin',
        component:AdminComponent,
        data: {
          title: 'Admin | Dashboard', 
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'workspace'
            },
            {
              label: 'Admin Panel',
              url: ''
            }
          ]
        }
      },
      {
        path:'caching',
        component:CachingComponent,
        data: {
          title: 'Features | Dashboard', 
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'workspace'
            },
            {
              label: 'Features',
              url: ''
            }
          ]
        }
      },
      {
        path:'settings',
        component:SettingsComponent,
        data: {
          title: 'Settings | Dashboard', 
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'workspace'
            },
            {
              label: 'Settings',
              url: ''
            }
          ]
        }
      },
      {
        path:'tasks',
        component:TasksComponent,
        data: {
          title: 'Tasks | Dashboard', 
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'workspace'
            },
            {
              label: 'Tasks',
              url: ''
            }
          ]
        }
      },
      {
        path:'tasks/details',
        component:TaskDetailsComponent,
        data:{
          title:'Task Details | Tasks',
          breadcrumb:[
            {
              label:'Dashboard',
              url:'workspace'
            },
            {
              label:'Tasks',
              url:'tasks'
            },
            {
              label:'Task Details',
              url:''
            }
          ]
        }
      },
      {
        path:'analytics',
        component:AnalyticsComponent,
        data: {
          title: 'Analytics | Dashboard', 
          breadcrumb: [
            {
              label: 'Dashboard',
              url: 'workspace'
            },
            {
              label: 'Analytics',
              url: ''
            }
          ]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
