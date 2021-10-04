import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  todaysDate= new Date('2021-10-05');
  constructor() { }

  ngOnInit(): void {
    console.log("Hello");
  }

}
