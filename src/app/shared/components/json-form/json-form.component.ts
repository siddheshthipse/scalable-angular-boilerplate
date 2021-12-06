import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SFButton, SFSchema, SFSelectWidgetSchema } from '@delon/form';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css'],
})
export class JsonFormComponent implements OnInit {
  @Input() schema: SFSchema | any;
  @Input() button: SFButton | any;
  @Output() formDataEvent: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    console.log('Dynamic Form Component');
  }

  submit(value: any) {
    console.log(value);
    this.formDataEvent.emit(value);
  }
}
