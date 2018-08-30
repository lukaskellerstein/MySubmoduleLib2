import { Component, OnInit } from '@angular/core';
import { Field } from '../base/field';
import { FieldConfig } from '../base/field.config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css']
})
export class MySelectComponent implements Field {

  config: FieldConfig;
  group: FormGroup;

}
