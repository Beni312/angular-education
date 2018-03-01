import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from "./core/core.module";
import { ErrorComponent } from "./core/error/error.component";
import { HeroesModule } from "./heroes/heroes.module";
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ToasterModule } from "angular5-toaster/dist";

const Routing: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'forms',
    loadChildren: 'app/forms/forms.example.module#FormsExampleModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'forms'
  },
  {
    path: '**',
    component: ErrorComponent
  }
], {
  useHash: true
});


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    HeroesModule,
    Routing,
    ToasterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
