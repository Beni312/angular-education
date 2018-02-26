import { ReactiveComponent } from "./reactive/reactive.component";
import { NgModule } from "@angular/core";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";
import { CustomFormComponent } from "./custom-form/custom-form.component";
import { FormsExampleComponent } from "./forms.example.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NameValidatorDirective } from "./template-driven/name.validator.directive";

const Routes = RouterModule.forChild([
  {
    path: '',
    component: FormsExampleComponent
  }
]);

@NgModule({
  declarations: [
    ReactiveComponent,
    FormsExampleComponent,
    TemplateDrivenComponent,
    CustomFormComponent,
    NameValidatorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Routes
  ],
  providers: [],
  bootstrap: [FormsExampleComponent]
})
export class FormsExampleModule {
}
