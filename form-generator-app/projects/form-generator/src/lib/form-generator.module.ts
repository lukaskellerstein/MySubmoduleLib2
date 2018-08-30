import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './dynamic-field/dynamic-field.directive';
import { WidgetsModule } from './dynamic-field/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WidgetsModule
  ],
  declarations: [DynamicFormComponent, DynamicFieldDirective],
  exports: [DynamicFormComponent, DynamicFieldDirective]
})
export class FormGeneratorModule { }
