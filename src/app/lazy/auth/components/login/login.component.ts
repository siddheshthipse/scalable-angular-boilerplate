import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ability } from '@casl/ability';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { AbilityService } from 'src/app/core/services/ability.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { LangTranslateService } from 'src/app/core/services/lang-translate.service';
import { AuthFascade } from '../../auth.fascade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  currentLang: any = 'en';
  userCredentials:
    | { email: string; password: string; token: string }
    | undefined;

  constructor(
    private fb: FormBuilder,
    private authfascade: AuthFascade,
    private authservice: AuthService,
    private cookieservice: CookieService,
    private translate: TranslateService,
    private ls: LangTranslateService,
    private ability: Ability,
    private abilityservice:AbilityService
  ) {
    this.ls.selectedLanguage.subscribe((returnData) => {
      // console.log(returnData);
      this.currentLang = returnData;

      translate.addLangs(['de', 'en']);
      translate.setDefaultLang('en');
      translate.use(this.currentLang);
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  selectedLanguage(language: any) {
    this.ls.selectedLanguage.next(language);
  }

  outlookLogin() {
    console.log('Triggered Outlook');
    this.authservice.outlook().subscribe((returnData) => {
      console.log(returnData);
    });
  }

  onSubmit() {
    this.authfascade.loginUser(this.loginForm.value);
  }
}
