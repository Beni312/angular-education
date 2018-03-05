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

  @ViewChild('customInput')
  customInput: CustomInputComponent;
  selected: Hero[] = [];
  heroes: Hero[];

  constructor(private fb: FormBuilder, private toasterService: ToasterService, private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.customForm = this.fb.group({
      customInput: new FormControl('', [Validators.required, Validators.minLength(3)]),
      heroes: new FormControl('', Validators.minLength(2))
    });
    this.heroesService.getHeroes().subscribe(response => {
      this.heroes = response;
    });
  }

  ngAfterViewInit(): void {
    this.customInput.input.nativeElement.focus();
  }

  onSubmit() {
    this.toasterService.pop('success', 'Valid: ' + this.customForm.valid.toString(), JSON.stringify(this.customForm.value));
  }
}
