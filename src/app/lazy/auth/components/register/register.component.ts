import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthFascade } from '../../auth.fascade';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({})
  constructor(private fb:FormBuilder,private authfascade:AuthFascade, private modal: NzModalService) { }

  ngOnInit(): void {
    this.registerForm =  this.fb.group({
      email:['',Validators.email],
      username:[''],
      password:[''],
      confirmpassword:['']
    });
  }

  onSubmit(){
    if(this.authfascade.createNewUser(this.registerForm.value)){
      this.modal.success({
        nzTitle: 'Account created successfully',
        nzOkText: 'Okay'
      });
    }
    this.registerForm.reset();
  }
}
