import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    DialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
