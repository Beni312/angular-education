import { BrowserModule } from "@angular/platform-browser";
import { CustomFormComponent } from './custom-form/custom-form.component';
import { CommonModule } from "@angular/common";
import { FormsExampleComponent } from "./forms.example.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NameValidatorDirective } from "./template-driven/name.validator.directive";
import { NgModule } from "@angular/core";
import { ReactiveComponent } from "./reactive/reactive.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";

const Routes = RouterModule.forChild([
  {
    path: '',
    component: FormsExampleComponent,
    children: [
      {
        path: 'template-driven',
        component: TemplateDrivenComponent
      },
      {
        path: 'reactive',
        component: ReactiveComponent
      },
      {
        path: 'custom-form',
        component: CustomFormComponent
      }
    ]
  }
]);

@NgModule({
  declarations: [
    ReactiveComponent,
    FormsExampleComponent,
    TemplateDrivenComponent,
    NameValidatorDirective,
    CustomFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routes,
    SharedModule
  ],
  providers: [],
  bootstrap: [FormsExampleComponent]
})
export class FormsExampleModule {
}
