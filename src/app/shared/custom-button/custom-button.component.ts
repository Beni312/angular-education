import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {

  @Input()
  buttonType: string;

  @Output()
  click = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.click.emit();
  }

}
