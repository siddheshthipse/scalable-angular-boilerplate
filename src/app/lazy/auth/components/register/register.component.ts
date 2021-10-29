import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocketService } from 'src/app/core/services/socket.service';
import { AuthFascade } from '../../auth.fascade';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({})
  constructor(private fb:FormBuilder,private authfascade:AuthFascade) { }

  ngOnInit(): void {
    this.registerForm =  this.fb.group({
      email:['',Validators.email],
      username:[''],
      password:[''],
      confirmpassword:['']
    });
  }

  onSubmit(){
    this.authfascade.createNewUser(this.registerForm.value);
    this.registerForm.reset();
  }
}
