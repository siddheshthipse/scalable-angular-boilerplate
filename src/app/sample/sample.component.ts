import { Component, OnInit } from '@angular/core';
import { Ability, AbilityBuilder } from '@casl/ability';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('This is sample component');
  }

}
