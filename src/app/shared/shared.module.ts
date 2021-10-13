import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDateFormatPipe } from './pipes/nice-date-format.pipe';
import {RouterModule} from '@angular/router';
import { NiceDeadlineFormatPipe } from './pipes/nice-deadline-format.pipe';


@NgModule({
  declarations: [
    NiceDateFormatPipe,
    NiceDeadlineFormatPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NiceDateFormatPipe,
    NiceDeadlineFormatPipe
  ]
})
export class SharedModule { }
