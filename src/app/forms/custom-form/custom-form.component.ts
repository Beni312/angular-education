import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements ControlValueAccessor, OnChanges {

  text= '';
  propagateChange: any = () => {};
  @Input()
  placeholder: string;

  constructor() {
  }

  clearSearch() {
    this.text = '';
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text'] && changes['text'].currentValue) {
      this.propagateChange(this.text);
    }
  }

}
