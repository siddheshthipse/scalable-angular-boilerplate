import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserCredentials } from 'src/app/core/models/usercredentials.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  userInfo: UserCredentials = { email: '', password: '' };
  loginForm = new FormGroup({});
  constructor(private fb: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberMe: [true],
    });
  }

  onSubmit() {
    this.userInfo.email=this.loginForm.value.email;
    this.userInfo.password=this.loginForm.value.password;
  }
}
