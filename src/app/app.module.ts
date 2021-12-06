import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from './pages/error404/error404/error404.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { CookieService } from 'ngx-cookie-service';
// import { SampleComponent } from './sample/sample.component';
import { LangTranslateModule } from './lang-translate/lang-translate.module';
import { Ability, PureAbility } from '@casl/ability';
import { AbilityModule } from '@casl/angular';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { AlainThemeModule } from '@delon/theme';
import { DemoDelonABCModule } from './delon-abc.module';
import { DemoDelonChartModule } from './delon-chart.module';
import { DelonFormModule } from '@delon/form';
import { DelonAuthModule } from '@delon/auth';
import { DelonACLModule } from '@delon/acl';
import { DelonCacheModule } from '@delon/cache';
import { StartupService, StartupServiceFactory } from './startup.service';
import { GlobalConfigModule } from './global-config.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

initializeApp(environment.firebase);

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '5e3ecd49-fb70-4ecc-bf7e-b65238bca85f',
      redirectUri: 'http://localhost:4200/',
    },
  });
}

@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    CoreModule,
    RouterModule.forRoot([]),
    LangTranslateModule,
    AbilityModule,
    MsalModule,
    NgDynamicBreadcrumbModule,
    AlainThemeModule.forRoot(),
    DemoDelonABCModule,
    DemoDelonChartModule,
    DelonACLModule.forRoot(),
    DelonCacheModule,
    DelonAuthModule,
    DelonFormModule.forRoot(),
    GlobalConfigModule,
  ],
  providers: [
    AuthGuard,
    CookieService,
    Title,
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true,
    },
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
