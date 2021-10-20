import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { Error404Component } from './pages/error404/error404/error404.component';
import { Error500Component } from './pages/error500/error500/error500.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error500Component,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule
  ],
  providers: [AuthGuard,CookieService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
