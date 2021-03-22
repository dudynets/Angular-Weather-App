import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes =[
  { path: '', component: ListComponent},
  { path: 'city/:city', component: CityComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
