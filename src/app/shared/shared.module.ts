import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from "./custom-form/custom.input.component";
import { FormsModule } from "@angular/forms";
import { CustomButtonComponent } from './custom-button/custom-button.component';

const declareExport = [
  CustomInputComponent,
  CustomButtonComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    declareExport
  ],
  exports: [
    declareExport
  ]
})
export class SharedModule { }
