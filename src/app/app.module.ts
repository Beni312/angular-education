import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsExampleModule } from "./forms/forms.example.module";
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

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
    BrowserModule,
    FormsExampleModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
