import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../base/field.config';
import { FormGroup } from '@angular/forms';
import { Field } from '../base/field';

@Component({
  selector: 'lib-object-link',
  templateUrl: './object-link.component.html'
})
export class ObjectLinkComponent implements Field  {

  config: FieldConfig;
  group: FormGroup;

  onLinkClick(ev){
    // TODO: trigger event to add new form to forms container 
    ev.stopPropagation();
    ev.preventDefault();
  }

}
