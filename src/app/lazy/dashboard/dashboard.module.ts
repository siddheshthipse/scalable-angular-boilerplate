import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardFascade } from './dashboard.fascade';
import { AbilityModule } from '@casl/angular';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule,
    AbilityModule,
    TranslateModule
  ],
  providers:[
    DashboardFascade
  ]
})
export class DashboardModule { }
