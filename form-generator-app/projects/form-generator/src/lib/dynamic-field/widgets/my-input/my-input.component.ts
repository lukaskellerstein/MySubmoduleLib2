import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../base/field.config';
import { FormGroup } from '@angular/forms';
import { Field } from '../base/field';

@Component({
  selector: 'lib-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css']
})
export class MyInputComponent implements Field  {

  config: FieldConfig;
  group: FormGroup;

  

}
