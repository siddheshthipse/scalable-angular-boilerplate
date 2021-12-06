import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  @Input() graphData: any;
  @Input() graphTitle: any;
  
  constructor(){}
  ngOnInit(): void {
    console.log('Bar Graph Component');
  }


  
}
