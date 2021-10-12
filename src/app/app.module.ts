import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { Error404Component } from './pages/error404/error404/error404.component';
import { Error500Component } from './pages/error500/error500/error500.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error500Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule
  ],
  providers: [AuthGuard,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
