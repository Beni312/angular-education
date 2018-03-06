import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CustomInputComponent } from '../../shared/custom-form/custom.input.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero, HeroesService } from '../../heroes/heroes.service';
import { ToasterService } from 'angular5-toaster/dist';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css'],
  providers: [HeroesService]
})
export class CustomFormComponent implements OnInit, AfterViewInit {

  customForm: FormGroup;

  //a template-ban levő változóra hivatkozik: #customInput, így tudjuk az elementet elérni
  @ViewChild('customInput')
  customInput: CustomInputComponent;
  selected: Hero[] = [];
  heroes: Hero[];
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private toasterService: ToasterService, private heroesService: HeroesService) {
  }

  ngOnInit() {
    //updateOn: a formcontrol értékét csak a submit esemény hatására állítja be, így csak akkor fogja validálni (a kezdő értéket validálja)
    this.customForm = this.fb.group({
      customInput: new FormControl('', {validators: [Validators.required, Validators.minLength(3)], updateOn: 'submit'}),
      heroes: new FormControl('', {validators: [Validators.required, Validators.minLength(2)], updateOn: 'submit'})
    });
    this.heroesService.getHeroes().subscribe(response => {
      this.heroes = response;
    });
  }

  ngAfterViewInit(): void {
    //amint a view betöltődik ráfókuszálunk az input mezőre, a customInput-ban deklarált változóra hivatkozva
    this.customInput.input.nativeElement.focus();
  }

  isFieldValid(field: string) {
    return this.customForm.get(field).invalid && this.isSubmitted;
  }

  hasError(field: string, error: string) {
    return this.customForm.get(field).errors[error];
  }

  onSubmit() {
    if (this.customForm.valid) {
      this.toasterService.pop('success', 'Valid: ' + this.customForm.valid.toString(), JSON.stringify(this.customForm.value));
    } else {
      this.isSubmitted = true;
    }
  }
}
