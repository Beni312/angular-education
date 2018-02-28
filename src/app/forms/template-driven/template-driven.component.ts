import { Component } from '@angular/core';
import { ToasterService } from "angular5-toaster/dist";

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

  constructor(private toasterService: ToasterService) {
    this.model = new Hero();
  }

  onSubmit() {
    this.toasterService.pop('success', 'Submitted data:', JSON.stringify(this.model));
  }

}
