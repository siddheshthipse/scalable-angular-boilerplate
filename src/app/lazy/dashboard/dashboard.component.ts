import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { ExportCsv, JsonReducer } from 'src/app/core/helpers/helper';
import { HttpService } from 'src/app/core/services/http.service';
import { DashboardFascade } from './dashboard.fascade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // loggedInUser:any;
  assignedDate = new Date(2021, 9, 1, 9, 33, 30, 0);
  deadlineDate = new Date(2021, 9, 31, 23, 0, 0, 0);

  constructor(
    private hs: HttpService,
    private logger: NGXLogger,
    private dfascade: DashboardFascade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.logger.log('Welcome to Dashboard');
    this.test();
  }

  //This is temporary code

  logout() {
    if (confirm('Are you sure you want to Logout')) {
      this.dfascade.logout();
      this.router.navigate(['auth/login']);
    } else {
      return;
    }
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

  insertDataIntoAppState() {
    this.dfascade.insert();
  }

  deleteDataFromAppState() {
    this.dfascade.delete(2);
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
