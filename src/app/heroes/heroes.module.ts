import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HeroesComponent } from './heroes.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { MaterialModule } from "../material/material.module";
import { RouterModule } from "@angular/router";
import { HeroesService } from "./heroes.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FakeBackendInterceptor } from "../../helpers/fake.backend";
import { ReactiveFormsModule } from "@angular/forms";

const Routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'heroes',
    component: HeroesComponent
  }
]);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    Routing
  ],
  declarations: [
    HeroesComponent,
    EditHeroComponent
  ],
  providers: [
    HeroesService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    }
  ],
  entryComponents: [
    EditHeroComponent
  ]
})
export class HeroesModule {
}
