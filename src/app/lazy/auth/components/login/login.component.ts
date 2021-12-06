import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Ability } from '@casl/ability';
import { CookieService } from 'ngx-cookie-service';
import { AbilityService } from 'src/app/core/services/ability.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthFascade } from '../../auth.fascade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({});
  
  outlookPayload:{outlookemail:string} | any;

  
  constructor(
    private fb: FormBuilder,
    private authfascade: AuthFascade,
    private authservice: AuthService,
    private cookieservice: CookieService,
    private ability: Ability,
    private abilityservice:AbilityService,
    private msalService:MsalService,
    private router:Router
  ) {
    
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  // selectedLanguage(language: any) {
  //   this.ls.selectedLanguage.next(language);
  // }

 

  async outlookLogin(){
    const response = await this.msalService.loginPopup().toPromise();

    const sample={
      outlookemail:response.account?.username
    }

    this.authfascade.loginOutlookUser(sample);
  }

  

  onSubmit() {
    this.authfascade.loginUser(this.loginForm.value);
  }
}
