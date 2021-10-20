import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';
import { AuthFascade } from '../../auth.fascade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  loginForm = new FormGroup({});
  userCredentials:{ email: string; password: string; token: string; } | undefined;

  constructor(private fb:FormBuilder,private authfascade:AuthFascade,private authservice:AuthService,private cookieservice:CookieService) { }

  ngOnInit(): void {
    this.loginForm =  this.fb.group({
      email:['',Validators.email],
      password:['',Validators.required]
    });
  }

  outlookLogin(){
    console.log('Triggered Outlook');
    this.authservice.outlook().subscribe((returnData)=>{
      console.log(returnData);
    })
  }

  onSubmit(){
    // this.authservice.loginUser(this.loginForm.value).subscribe((response)=>{
    //   console.log('Brute Force');
    //   console.log(response);
    // })
    this.authfascade.loginUser(this.loginForm.value);
  }
}
