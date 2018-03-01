import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ToasterModule } from "angular5-toaster/dist";
import { ErrorComponent } from "./core/error/error.component";
import { HeroesModule } from "./heroes/heroes.module";
import { CoreModule } from "./core/core.module";

const Routing: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'forms',
    loadChildren: 'app/forms/forms.example.module#FormsExampleModule'
  },
  {
    path: '**',
    component: ErrorComponent
  }
]);


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
