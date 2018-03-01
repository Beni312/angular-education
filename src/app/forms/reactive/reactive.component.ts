import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ToasterService } from "angular5-toaster/dist";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private toasterService: ToasterService) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      user: this.fb.group({
        title: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(5)
          ]
        }),
        firstName: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)]
        }),
        lastName: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)]
        }),
        job: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(30)]
        }),
        email: new FormControl('', {
          validators: [
            Validators.required,
            Validators.email,
            Validators.minLength(5),
            Validators.maxLength(30)]
        }),
        username: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            ReactiveComponent.usernameValidator]
        })
      }),
      password: this.fb.group({
        password: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(30),
            Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$')
          ]
        }),
        passwordAgain: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(30),
            Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$')
          ]
        })
      })
    });

  }

  static usernameValidator(c): ValidationErrors {
    if (c.value != 'admin') {
      return null;
    }
    return {containsSpecialCharacter: false};
  }

  register() {
    this.toasterService.pop('success', 'Submitted data:', JSON.stringify(this.registrationForm.value));
  }

}
