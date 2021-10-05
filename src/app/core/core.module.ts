import { ErrorHandler, NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ButtonModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
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
    }
  ]
})
export class CoreModule { }
