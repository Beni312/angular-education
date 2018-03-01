import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { Directive } from '@angular/core';
import { ReactiveComponent } from "../reactive/reactive.component";

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NameValidatorDirective,
      multi: true
    }
  ]
})
export class NameValidatorDirective implements Validator {

  constructor() {
  }

  validate(c: AbstractControl): ValidationErrors {
    return ReactiveComponent.usernameValidator(c);
  }

}
