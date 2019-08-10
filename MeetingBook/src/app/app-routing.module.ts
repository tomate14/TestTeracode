import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChargeMeetingComponent } from './charge-meeting/charge-meeting.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';


const routes: Routes = [
  { path:'', redirectTo: 'viewMeeting', pathMatch: 'full'  },
  { path:'addMeeting', component: ChargeMeetingComponent },
  { path:'viewMeeting',  component: ViewMeetingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
