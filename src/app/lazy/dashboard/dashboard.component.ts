import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { NGXLogger } from 'ngx-logger';
import { HttpService } from 'src/app/core/services/http.service';
import { DeleteData, GetData } from 'src/app/core/state-management/app.action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  todaysDate = new Date('2021-10-04');
  constructor(
    private hs: HttpService,
    private store: Store,
    private logger: NGXLogger
  ) {}

  ngOnInit(): void {
    this.logger.log('Hello');
    this.logger.log(environment.env_name);

    this.hs.getData().subscribe(
      (response) => {
        this.logger.log(response);
      },
      (error) => {
        this.logger.error(error);
      }
    );
  }

  triggerError() {
    throw Error('An error has been triggered');
  }

  trigger404Error() {
    this.hs.give404Error().subscribe(
      (response) => {
        this.logger.log('I wont be visible in console');
      },
      (error) => {
        this.logger.error('Resource not found');
      }
    );
  }

  servernotfound() {
    this.hs.getData().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.logger.error('Internal Server Error');
      }
    );
  }

  insertDataIntoAppState() {
    this.store.dispatch(new GetData());
  }

  deleteDataFromAppState() {
    this.store.dispatch(new DeleteData(2));
  }
}
