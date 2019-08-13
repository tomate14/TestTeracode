import { Component, OnInit } from '@angular/core';
import { ReservationsService } from 'src/providers/services/reservations.service';
import { Reservation } from 'src/providers/DTO/Reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-meeting',
  templateUrl: './view-meeting.component.html',
  styleUrls: ['./view-meeting.component.scss']
})
export class ViewMeetingComponent implements OnInit {

  constructor(private reservationService:ReservationsService,
              private router: Router) { 
    console.log(this.reservationService._reservation);
  }

  ngOnInit() {
  }

  viewReservation(reservation:Reservation){
    this.reservationService._viewReservation = reservation;
    this.router.navigate(["/addMeeting"]);
  }
}
