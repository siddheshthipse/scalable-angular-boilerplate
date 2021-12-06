import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {

  title:any;
  workItemsData: any;
  constructor() {}

  ngOnInit(): void {
    this.title='Work Items Analysis';
    
    this.workItemsData = [
      {
        x: 'Tasks',
        y: 50,
      },
      {
        x: 'Issues',
        y: 32,
      },
      {
        x: 'Test Cases',
        y: 68,
      },
      {
        x: 'Backlogs',
        y: 25,
      },
    ];
  }
}
