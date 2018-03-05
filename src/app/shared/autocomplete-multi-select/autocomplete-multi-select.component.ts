import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-multi-select',
  templateUrl: './autocomplete-multi-select.component.html',
  styleUrls: ['./autocomplete-multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AutocompleteMultiSelectComponent,
      multi: true
    }
  ]
})
export class AutocompleteMultiSelectComponent implements ControlValueAccessor, OnChanges {

  query = '';
  filteredList = [];
  showDropdown = false;

  @Input()
  selected: any[] = [];
  @Input()
  items: any[];
  @Input()
  property;
  @Input()
  placeholder: string;
  @Input()
  toOrder: boolean = false;

  @ViewChild('inp')
  input: ElementRef;

  propagateChange: any = () => {
  };

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.items && this.toOrder) {
      this.items = this.items.sort((a, b) => {
        if (a[this.property] < b[this.property]) {
          return -1;
        } else if (a[this.property] > b[this.property]) {
          return 1;
        }
        return 0;
      })
    }
  }

  clearSearch() {
    this.query = '';
    this.input.nativeElement.focus();
  }

  filter() {
    if (this.query !== '' && this.query.length > 0) {
      this.filteredList = this.items.filter(el => {
        this.showDropdown = true;
        if (el !== undefined) {
          return el[this.property].toLowerCase().indexOf(this.query.toLowerCase()) > -1 && this.selected.indexOf(el) === -1;
        }
      });
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.selected.push(item);
    this.propagateChange(this.selected);
    this.query = '';
    this.filteredList = [];
    this.input.nativeElement.focus();
  }

  remove(item) {
    this.selected.splice(this.selected.indexOf(item), 1);
    this.propagateChange(this.selected);
  }

  closeDropdown() {
    this.showDropdown = false;
  }

  openDropDown() {
    this.showDropdown = true;
  }

  writeValue(obj: any): void {
    if (obj) {
      this.select(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }
}
