import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CustomInputComponent } from "../../shared/custom-form/custom.input.component";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ToasterService } from "angular5-toaster/dist";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit, AfterViewInit {

  customForm: FormGroup;

  @ViewChild('customInput')
  customInput: CustomInputComponent;


  constructor(private fb: FormBuilder, private toasterService: ToasterService) { }

  ngOnInit() {
    this.customForm = this.fb.group({
      customInput: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  ngAfterViewInit(): void {
    this.customInput.input.nativeElement.focus();
  }

  onSubmit() {
    this.toasterService.pop('success', 'Submitted data:', JSON.stringify(this.customForm.value));
  }

}
