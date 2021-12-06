import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LangTranslateService } from 'src/app/core/services/lang-translate.service';
import { DashboardFascade } from '../../dashboard.fascade';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  utcDate:string='23/11/2021 4:20:30 AM';
  
  settingsForm = new FormGroup({});

  currentDateFormat:string | undefined;
  currentLanguage:string | undefined;
  currentTimezone:string | undefined;

  userInfo: any;
  constructor(
    private formBuilder: FormBuilder,
    private dfascade: DashboardFascade,
    private modal: NzModalService
  ) {}

  ngOnInit(): void {
    this.settingsForm = this.formBuilder.group({
      dateformat: [''],
      language: [''],
      timezone:['']
    });

    this.userInfo = this.dfascade.getLoggedInUserDetails();
    console.log(this.userInfo);

    this.currentDateFormat=this.userInfo.setting.dateformat;
    this.currentLanguage=this.userInfo.setting.language;
    this.currentTimezone=this.userInfo.setting.timezone;
  }

  onSubmit() {
    console.log(this.userInfo._id);

    const updateObj = {
      setting: {
        dateformat: this.settingsForm.value.dateformat,
        language: this.settingsForm.value.language,
        timezone:this.settingsForm.value.timezone
      },
    };
    
    if(this.dfascade.changeSetting(updateObj,this.userInfo._id)){
      this.modal.success({
        nzTitle: 'Settings updated',
        nzOkText:'Okay'
      });
    }
  }
}
