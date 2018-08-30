import { Component, AfterViewInit, ViewChild, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Validators } from '@angular/forms';

import swaggerSchema from './schema.json';

import * as SwaggerParser from 'swagger-parser/dist/swagger-parser';

// import { FieldConfig } from 'MySubmoduleLib2/lib/dynamic-field/widgets/base/field.config';

import { DynamicFormComponent } from 'form-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config = {
    metadata: { type: "object", properties: {}, required: Array(3), description: "ObjectMetaType is metadata that all persisted reso…ve, which includes all objects↵users must create." },
    spec: { type: "object", properties: {}, title: "Specification of Object" },
    status: { type: "object", properties: {}, required: Array(3), title: "Status of Object" },
    system_metadata: { type: "object", properties: {}, description: "SystemObjectMeta is metadata generated or populate… objects and↵cannot be updated directly by users." },
    test0: { type: "object", properties: {}, description: "aaa" },
    test1: { type: "input", properties: {}, description: "xxx" },
    test2: { type: "select", properties: {}, description: "yyy" },
    test3: { type: "button", properties: {}, description: "zzz" }
  }


  private parser: SwaggerParser;

  constructor() {
    this.parser = new SwaggerParser();
  }


  ngOnInit() {

    this.parser.dereference(swaggerSchema).then((parsedSchema) => {
      // let schema = parsedSchema.definitions['crudapiObjectCreateReq'];
      // this.config = schema.properties;
      console.log("config:");
      console.log(this.config);

    });





  }

  ngAfterViewInit() {
    // let previousValid = this.form.valid;
    // this.form.changes.subscribe(() => {
    //   if (this.form.valid !== previousValid) {
    //     previousValid = this.form.valid;
    //     this.form.setDisabled('submit', !previousValid);
    //   }
    // });

    // this.form.setDisabled('submit', true);
    // this.form.setValue('name', 'Lukas Kellerstein');
  }

  submit(value: { [name: string]: any }) {
    console.log(value);
  }
}