import { CommonModule } from '@angular/common';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { FakeBackendInterceptor } from "../../helpers/fake.backend";
import { HeroesComponent } from './heroes.component';
import { HeroesService } from "./heroes.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MaterialModule } from "../material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

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
