import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";


const appRoutes: Routes = [
  {path: '', component:HomepageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
