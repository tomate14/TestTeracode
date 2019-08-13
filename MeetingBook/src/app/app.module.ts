import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChargeMeetingComponent } from './charge-meeting/charge-meeting.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';

@NgModule({
  declarations: [
    AppComponent,
    ChargeMeetingComponent,
    ViewMeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
