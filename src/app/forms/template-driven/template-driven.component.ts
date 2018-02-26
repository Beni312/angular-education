import { Component } from '@angular/core';

export class Hero {
    public id: number;
    public name: string;
    public power: string;
    public alterEgo?: string;
}

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model: Hero;

  constructor() {
    this.model = new Hero();
  }

  onSubmit() {
    console.log('Submitted');
  }

}
