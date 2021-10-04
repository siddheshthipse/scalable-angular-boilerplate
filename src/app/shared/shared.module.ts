import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDateFormatPipe } from './pipes/nice-date-format.pipe';



@NgModule({
  declarations: [
    NiceDateFormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NiceDateFormatPipe
  ]
})
export class SharedModule { }
