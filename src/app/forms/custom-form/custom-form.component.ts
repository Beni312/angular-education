import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ToasterService } from "angular5-toaster/dist";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  customForm: FormGroup;

  constructor(private fb: FormBuilder, private toasterService: ToasterService) { }

  ngOnInit() {
    this.customForm = this.fb.group({
      customInput: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  onSubmit() {
    this.toasterService.pop('success', 'Submitted data:', JSON.stringify(this.customForm.value));
  }

}
