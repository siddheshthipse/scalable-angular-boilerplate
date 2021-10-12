import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDateFormatPipe } from './pipes/nice-date-format.pipe';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    NiceDateFormatPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NiceDateFormatPipe
  ]
})
export class SharedModule { }
