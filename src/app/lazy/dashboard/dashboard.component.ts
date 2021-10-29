import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ability, AbilityBuilder } from '@casl/ability';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NGXLogger } from 'ngx-logger';
import { ExportCsv, JsonReducer } from 'src/app/core/helpers/helper';
import { AbilityService } from 'src/app/core/services/ability.service';
import { HttpService } from 'src/app/core/services/http.service';
import { SocketService } from 'src/app/core/services/socket.service';
import { DashboardFascade } from './dashboard.fascade';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isCollapsed = false;

  constructor(
    
  ) {}

  ngOnInit(): void {
    console.log('This is Dashboard');
  }

  
}
