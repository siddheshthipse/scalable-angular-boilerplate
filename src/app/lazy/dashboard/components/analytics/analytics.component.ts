import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Analytics Component');
  }

  receivedFormData($event:any){
    console.log('Data got from child');
    console.log($event);
  }
}
