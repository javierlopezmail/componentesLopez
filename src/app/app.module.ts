import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppContentComponent,
    AppSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
