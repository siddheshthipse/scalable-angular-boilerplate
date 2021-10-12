import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { Login } from 'src/app/core/state-management/auth.action';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthFascade {
  userCredentials:any;
  
  constructor(private store: Store, private authservice:AuthService,private router:Router,private cookieService:CookieService) {}

  //--------------------Register--------------------------------
  createNewUser(payload:any){
    this.authservice.submitregister(payload).subscribe((returnData)=>{
      alert('Registration successful');
      console.log(returnData);
    },(error)=>{
      console.log('Failed to register');
    });
  }

  //-----------------------Login-------------------------------------
  loginUser(payload:any){
    this.authservice.loginUser(payload).subscribe((returnData:any)=>{
      localStorage.setItem('token',returnData.tokens[0].token);

      this.userCredentials={
        email:returnData.email,
        token:returnData.tokens[0].token
      }
      
      this.store.dispatch(new Login(this.userCredentials));

      this.cookieService.set('token',this.userCredentials.token,{expires:1,path:'/'});

      this.router.navigate(['']);
    },(error)=>{
      console.log('Some error in logging in the User');
      console.log(error);
    })
  }
}
