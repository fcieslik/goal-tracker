import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../../projects/material/src/lib/material.module';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {DashboardModule} from './dashboard/components/dashboard/dashboard.module';
import {DateComponent} from './dashboard/components/date/date.component';
import {ProjectsComponent} from './dashboard/components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    DateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
