import { CommonModule } from '@angular/common';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { FakeBackendInterceptor } from '../../helpers/fake.backend';
import { HeroesComponent } from './heroes.component';
import { HeroesService } from './heroes.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroesResolver } from './heroes.resolver';

const Routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'heroes',
    component: HeroesComponent,
    resolve: {
      //a heroes adathalmazt betölti a resolver, mielőtt betöltődne ez a route
      //ezt a heroes komponensben az activated route service-ből lehet elérni
      heroes: HeroesResolver
    }
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
    HeroesResolver,
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
