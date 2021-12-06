import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AuthFascade } from '../../auth.fascade';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({});
  constructor(private fb:FormBuilder,private authfascade:AuthFascade, private modal: NzModalService,private msalService:MsalService) { }

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

  async outlookRegister(){
    const response = await this.msalService.loginPopup().toPromise();

    const sample={
      outlookemail:response.account?.username
    }

    const res= await this.authfascade.createNewOutlookUser(sample).toPromise();
    if(res){
      this.modal.success({
        nzTitle: 'Outlook user registered successfully',
        nzOkText: 'Okay'
      });
    }
  }
}
