import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorhandlingService } from './errorhandler/errorhandling.service';
import { HttpService } from './services/http.service';
import {ButtonModule} from 'primeng/button';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment';
import { AppState } from './state-management/app.state';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { AuthState } from './state-management/auth.state';
import { EnsureModuleLoadedOnceGuard } from './core-guard/ensure-module-loaded-once.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    NgxsModule.forRoot([AppState,AuthState], {
      developmentMode: !environment.production,
    }),
    NgxsLoggerPluginModule.forRoot({disabled:environment.disableloggerplugin}),
    LoggerModule.forRoot({
      serverLoggingUrl: environment.serverLoggingUrl,
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.WARN,
      disableConsoleLogging: environment.disableConsoleLogging
    })
  ],
  providers:[
    HttpService,
    {
      provide:ErrorHandler,
      useClass:ErrorhandlingService
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ErrorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard{ 
  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
