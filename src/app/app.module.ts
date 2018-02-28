import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsExampleModule } from "./forms/forms.example.module";
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { ToasterModule } from "angular5-toaster/dist";

const Routing: ModuleWithProviders = RouterModule.forRoot([
  {
    path: 'forms',
    loadChildren: 'app/forms/forms.example.module#FormsExampleModule'
  }
]);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserAnimationsModule,
    ToasterModule,
    BrowserModule,
    FormsExampleModule,
    Routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
