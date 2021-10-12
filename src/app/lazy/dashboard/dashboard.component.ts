import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { HttpService } from 'src/app/core/services/http.service';
import { DashboardFascade } from './dashboard.fascade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  loggedInUser:any;
  // todaysDate = new Date('2021-10-08');
  constructor(
    private hs: HttpService,
    private logger: NGXLogger,
    private dfascade:DashboardFascade,
    private router:Router,
  ) {}

  ngOnInit(): void {
    this.logger.log('Welcome to Dashboard');
  }

  //This is temporary code

  logout(){
    if(confirm('Are you sure you want to Logout')){
      this.dfascade.logout();
      this.router.navigate(['auth/login']);
    }else{
      return;
    }    
  }

  triggerError() {
    throw Error('An error has been triggered');
  }

  badRequest(){
    this.dfascade.badRequestError();
  }

  resourceNotFound(){
    this.dfascade.resourceNotFoundError();
  }

  internalServerError(){
    this.dfascade.internalServerError();
  }

  insertDataIntoAppState(){
    this.dfascade.insert()
  }

  deleteDataFromAppState(){
    this.dfascade.delete(2);
  }
}
