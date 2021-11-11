import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDateFormatPipe } from './pipes/nice-date-format.pipe';
import {RouterModule} from '@angular/router';
import { NiceDeadlineFormatPipe } from './pipes/nice-deadline-format.pipe';
import { DatePreferencePipe } from './pipes/date-preference.pipe';


@NgModule({
  declarations: [
    NiceDateFormatPipe,
    NiceDeadlineFormatPipe,
    DatePreferencePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NiceDateFormatPipe,
    NiceDeadlineFormatPipe,
    DatePreferencePipe
  ]
})
export class SharedModule { }
