import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { Error404Component } from './pages/error404/error404/error404.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';
import { SampleComponent } from './sample/sample.component';
import { LangTranslateModule } from './lang-translate/lang-translate.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterModule,
    LangTranslateModule
  ],
  providers: [AuthGuard,CookieService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
