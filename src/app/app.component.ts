import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';
import { LangTranslateService } from './core/services/lang-translate.service';
import { environment } from '../environments/environment';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { SocketService } from 'src/app/core/services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title='ProjectX';
  currentLang: any = 'en';
  message: any = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translate: TranslateService,
    private ls: LangTranslateService,
    private socketservice:SocketService
  ) {
    this.ls.selectedLanguage.subscribe((returnData) => {
      this.currentLang = returnData;

      translate.addLangs(['de', 'en']);
      translate.setDefaultLang('en');
      translate.use(this.currentLang);
    });
  }

  ngOnInit() {
    this.socketservice.setupSocketConnection();
    
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        var rt = this.getChild(this.activatedRoute);

        rt.data.subscribe((data: any) => {
          this.titleService.setTitle(data.title);
        });
      });

    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: environment.firebase.vapidKey })
      .then((currentToken) => {
        if (currentToken) {
          console.log('Hurraaa!!! we got the token.....');
          console.log(currentToken);
        } else {
          console.log(
            'No registration token available. Request permission to generate one.'
          );
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      this.message = payload;
    });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }
}
