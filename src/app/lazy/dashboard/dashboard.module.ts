import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardFascade } from './dashboard.fascade';
import { AbilityModule } from '@casl/angular';
import { TranslateModule } from '@ngx-translate/core';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { NgDynamicBreadcrumbModule } from "ng-dynamic-breadcrumb";
//Components
import { CachingComponent } from './components/caching/caching.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AdminComponent } from './components/admin/admin.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CachingComponent,
    WorkspaceComponent,
    SettingsComponent,
    AnalyticsComponent,
    AdminComponent,
    TaskDetailsComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    SharedModule,
    RouterModule,
    AbilityModule,
    TranslateModule,
    NgDynamicBreadcrumbModule
  ],
  providers:[
    DashboardFascade
  ]
})
export class DashboardModule { }
