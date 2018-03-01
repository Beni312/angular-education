import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  editHeroForm: FormGroup;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  constructor(private dialogRef: MatDialogRef<EditHeroComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.editHeroForm = this.fb.group({
      id: new FormControl({value: this.data.id, disabled: true}),
      name: new FormControl(this.data.name, [Validators.required, Validators.minLength(3)]),
      power: new FormControl(this.data.power, [Validators.required, Validators.minLength(3)]),
      alterEgo: new FormControl(this.data.alterEgo, Validators.required)
    });
  }

  update() {
    this.dialogRef.close(this.editHeroForm.value);
  }

  cancel() {
    this.dialogRef.close();
  }
}
