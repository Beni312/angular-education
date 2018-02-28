import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom.input.component.html',
  styleUrls: ['./custom.input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {

  text: string;
  @Input()
  placeholder: string;
  @ViewChild('input')
  input: ElementRef;

  propagateChange: any = () => {};

  constructor() {
  }

  clearSearch() {
    this.text = '';
    this.input.nativeElement.focus();
  }

  writeValue(obj: any): void {
  }


  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  change() {
    this.propagateChange(this.text);
  }
}
