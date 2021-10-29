import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ability, AbilityBuilder } from '@casl/ability';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NGXLogger } from 'ngx-logger';
import { ExportCsv, JsonReducer } from 'src/app/core/helpers/helper';
import { AbilityService } from 'src/app/core/services/ability.service';
import { HttpService } from 'src/app/core/services/http.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { DashboardFascade } from '../../dashboard.fascade';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  loggedInUser:any;
  userflag:boolean=false;
  assignedDate = new Date(2021, 9, 1, 9, 33, 30, 0);
  deadlineDate = new Date(2021, 9, 31, 23, 0, 0, 0);

  constructor(
    private hs: HttpService,
    private logger: NGXLogger,
    private dfascade: DashboardFascade,
    private router: Router,
    private abilityservice:AbilityService,
    private socketservice:SocketService,
    private modal:NzModalService
  ) {}

  ngOnInit(): void {
    this.logger.log('Welcome to Dashboard');
    this.loggedInUser=this.dfascade.getLoggedInUserDetails()
    this.assignAbilities(this.loggedInUser);

    //Helper Function Code
    // this.test();
  }

  
  //SocketIO
  triggerSocket(){
    this.socketservice.setupSocketConnection();
  }

  sendMessage(message:any){
    this.socketservice.sendMessage(message.value);
  }

  disconnectSocket(){
    this.socketservice.endSocketConnection();
  }
  //CASL Angular
  assignAbilities(user:any){
    this.abilityservice.setUserAbility(user.email)
  }
  //This is temporary code

  logout() {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to logout',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOnOk: () => {
        this.dfascade.logout();
        this.router.navigate(['auth/login']);
      },
      nzCancelText: 'No',
      nzOnCancel: () => {
        return;
      }
    })
  }

  triggerError() {
    throw Error('An error has been triggered');
  }

  badRequest() {
    this.dfascade.badRequestError();
  }

  resourceNotFound() {
    this.dfascade.resourceNotFoundError();
  }

  internalServerError() {
    this.dfascade.internalServerError();
  }

  async test() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await data.json();

    const rule = [
      {
        id: 'id', //can be just keys and camelcase

        type: 'string',

        isParent: false,
      },

      {
        id: 'name',

        type: 'string',

        isParent: false,
      },

      {
        id: 'email',

        type: 'string',

        isParent: false,
      },

      {
        id: 'address',

        type: 'true',

        isParent: true,

        subfield: 'city',
      },

      {
        id: 'phone',

        type: 'string',

        isParent: false,
      },

      {
        id: 'website',

        type: 'string',

        isParent: false,
      },

      {
        id: 'company',

        type: 'string',

        isParent: true,

        subfield: 'name',
      },
    ];

    let reducedJson = JsonReducer(res, rule);

    ExportCsv(reducedJson, 'testData');
  }

}
