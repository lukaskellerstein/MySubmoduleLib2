import { Component, OnInit } from '@angular/core';
import { Field } from '../base/field';
import { FieldConfig } from '../base/field.config';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
