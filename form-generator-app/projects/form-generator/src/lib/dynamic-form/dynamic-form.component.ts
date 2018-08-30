import { Component, OnInit, OnChanges, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { FieldConfig } from '../dynamic-field/widgets/base/field.config';

@Component({
  selector: 'lib-dynamic-form',
  exportAs: 'dynamicForm',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormComponent implements OnChanges, OnInit {
  @Input()
  config = {}

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;

  get controls() {
    console.log("get controls()");

    const controls = []
    Object.keys(this.config).forEach(key => {
      const value = this.config[key];
      if (!value.hasOwnProperty("name")) {
        value.name = key;
      }
      controls.push(value);
    });

    console.log("controls:");
    console.log(controls);

    return controls;
  }
  get changes(): Observable<any> { return this.form.valueChanges; }
  get valid() { return this.form.valid; }
  get value(): any { return this.form.value; }

  objectGetKeys = Object.keys;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
  }

  ngOnChanges() {
    if (!this.form) {
      this.form = this.createGroup();
    }

    const controls = Object.keys(this.form.controls);
    const configControls = this.controls.map((item) => item.name);

    controls
      .filter((control) => !configControls.includes(control))
      .forEach((control) => this.form.removeControl(control));

    configControls
      .filter((control) => !controls.includes(control))
      .forEach((name) => {
        const config = this.controls.find((control) => control.name === name);
        this.form.addControl(name, this.createControl(config));
      });


  }

  createGroup() {
    const group = this.fb.group({});
    this.controls.forEach(control => group.addControl(control.name, this.createControl(control)));
    return group;
  }

  createControl(config: FieldConfig): FormControl {
    const { disabled, validation, value } = config;
    return this.fb.control({ disabled, value }, validation);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }

  setDisabled(name: string, disable: boolean) {
    if (this.form.controls[name]) {
      const method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }

    this.config = this.controls.map((item) => {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  }

  setValue(name: string, value: any) {
    this.form.controls[name].setValue(value, { emitEvent: true });
  }
}
