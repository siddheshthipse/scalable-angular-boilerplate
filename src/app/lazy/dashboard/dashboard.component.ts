import { Component, OnInit } from '@angular/core';
import { AbilityService } from 'src/app/core/services/ability.service';
import { LangTranslateService } from 'src/app/core/services/lang-translate.service';
import { DashboardFascade } from './dashboard.fascade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;
  loggedInUser:any;

  constructor(
    private dfascade:DashboardFascade,
    private abilityservice:AbilityService,
    private langtranslate: LangTranslateService
  ) {}

  ngOnInit(): void {
    this.loggedInUser=this.dfascade.getLoggedInUserDetails()
    this.assignAbilities(this.loggedInUser);

    //Setting the Language
    this.langtranslate.selectedLanguage.next(this.loggedInUser.setting.language);
  }

  //CASL Angular
  assignAbilities(user:any){
    this.abilityservice.setUserAbility(user.email)
  }
}
