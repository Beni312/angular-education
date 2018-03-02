import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {

  @Input()
  buttonType: string = 'button'; //default value

  @Output()
  click = new EventEmitter<any>();

  constructor() {
  }

  onClick(event: MouseEvent) {
    this.click.emit();
    //without this line, the click event triggered twice
    event.stopPropagation();
  }

}
