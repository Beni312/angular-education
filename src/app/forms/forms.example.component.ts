import {Component} from "@angular/core";

@Component({
  selector: 'app-forms-example',
  templateUrl: './forms.example.component.html'
})
export class FormsExampleComponent {

  component: any;


  constructor() {
  }

  changeComponent(component: any) {
    this.component = component;
  }
}
