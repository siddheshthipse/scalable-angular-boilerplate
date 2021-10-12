import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFascade } from '../../auth.fascade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {  
  loginForm = new FormGroup({});
  userCredentials:{ email: string; password: string; token: string; } | undefined;

  constructor(private fb:FormBuilder,private authfascade:AuthFascade) { }

  ngOnInit(): void {
    this.loginForm =  this.fb.group({
      email:['',Validators.email],
      password:['',Validators.required]
    });
  }

  onSubmit(){
    this.authfascade.loginUser(this.loginForm.value);
  }
}
