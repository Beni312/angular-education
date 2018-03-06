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

  propagateChange: any = () => {};
  propagateTouch: any = () => {};

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

  //ha szeretnénk ellenőrizni, hogy a felhasználó megérinti e a komponenst, meg adni egy fv-t, ahogy a registerOnChange-nél
  registerOnTouched(fn: any): void {
    this.propagateTouch = fn;
  }

  //egy eseményre pedig beállítjuk, hogy a felhasználó megérintette a komponenst, ez esetben az input mező click eseményére fogja megérinteni
  onTouch() {
    console.log('touched');
    this.propagateTouch();
  }
}
