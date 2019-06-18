import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';

import { FormsRoutingModule } from './forms-routing.module';
import { BasicComponent } from './basic/basic.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { EditorsComponent } from './editors/editors.component';
import { FormExamplesComponent } from './form-examples/form-examples.component';
import { FormValidationsComponent } from './form-validations/form-validations.component';
import { WizardComponent } from './wizard/wizard.component';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
  declarations: [BasicComponent, AdvancedComponent, EditorsComponent, FormExamplesComponent, FormValidationsComponent, WizardComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    FormsModule,
    ArchwizardModule,
    DropzoneModule
  ]
})
export class FormModule { }
