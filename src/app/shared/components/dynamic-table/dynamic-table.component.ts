import { Component, Input, OnInit } from '@angular/core';
import { STChange, STColumn } from '@delon/abc/st';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Dynamic Table')
  }

  @Input() columns:STColumn[] | any;
  @Input() data:any;
  @Input() pageSize:number | any;

  
}
