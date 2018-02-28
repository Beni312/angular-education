import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from "./custom-form/custom.input.component";
import { FormsModule } from "@angular/forms";

const declareExport = [
  CustomInputComponent
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
