import { Component } from '@angular/core';
import { Hero } from '../../heroes/heroes.service';
import { ToasterService } from 'angular5-toaster/dist';

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
