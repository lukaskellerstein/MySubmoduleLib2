import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ObjectLinkComponent } from './widgets/object-link/object-link.component';
import { Field } from './widgets/base/field';
import { MyButtonComponent } from './widgets/my-button/my-button.component';
import { MyInputComponent } from './widgets/my-input/my-input.component';
import { MySelectComponent } from './widgets/my-select/my-select.component';
import { FieldConfig } from './widgets/base/field.config';

const components: { [type: string]: Type<Field> } = {
  button: MyButtonComponent,
  input: MyInputComponent,
  select: MySelectComponent,
  object: ObjectLinkComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input()
  config: FieldConfig;

  @Input()
  name: string;

  @Input()
  group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    if (!components[this.config.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.type}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.buildFieldConfig(this.config)
    this.component.instance.group = this.group;

    console.log(this.component);
  }

  buildFieldConfig(config) {

    // console.log("before:")
    // console.log(config);

    if (!config.name) {
      config.name = this.name;
    }

    if (!config.label) {
      config.label = this.name;
    }

    // console.log("after:")
    // console.log(config);

    // TODO further field config prerender changes
    return config;

  }
}
