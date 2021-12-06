import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDateFormatPipe } from './pipes/nice-date-format.pipe';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Pipes
import { NiceDeadlineFormatPipe } from './pipes/nice-deadline-format.pipe';
import { DatePreferencePipe } from './pipes/date-preference.pipe';
import { TimezonePreferencePipe } from './pipes/timezone-preference.pipe';
//Components
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { JsonFormComponent } from './components/json-form/json-form.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { NotificationBellComponent } from './components/notification-bell/notification-bell.component';
//Modules
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { DemoDelonChartModule } from './../delon-chart.module';
import { DemoDelonABCModule } from './../delon-abc.module';
import { DelonFormModule } from '@delon/form';


@NgModule({
  declarations: [
    NiceDateFormatPipe,
    NiceDeadlineFormatPipe,
    DatePreferencePipe,
    TimezonePreferencePipe,
    BarGraphComponent,
    JsonFormComponent,
    DynamicTableComponent,
    NotificationBellComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    DemoDelonChartModule,
    DemoDelonABCModule,
    DelonFormModule
  ],
  exports:[
    NiceDateFormatPipe,
    NiceDeadlineFormatPipe,
    DatePreferencePipe,
    TimezonePreferencePipe,
    BarGraphComponent,
    JsonFormComponent,
    DynamicTableComponent,
    NotificationBellComponent
  ]
})
export class SharedModule { }
