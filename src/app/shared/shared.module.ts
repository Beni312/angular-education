import { AutocompleteMultiSelectComponent } from './autocomplete-multi-select/autocomplete-multi-select.component';
import { ClickOutsideDirective } from './click-outside-directive/click-outside.directive';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomInputComponent } from './custom-form/custom.input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ErrorDisplayComponent } from './error-display/error-display.component';

const declareExport = [
  AutocompleteMultiSelectComponent,
  ClickOutsideDirective,
  CustomInputComponent,
  CustomButtonComponent,
  ErrorDisplayComponent
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
export class SharedModule {
}
