import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomsService } from 'src/providers/services/rooms.service';
import { ReservationsService } from 'src/providers/services/reservations.service';


@Component({
  selector: 'app-charge-meeting',
  templateUrl: './charge-meeting.component.html',
  styleUrls: ['./charge-meeting.component.scss']
})
export class ChargeMeetingComponent implements OnInit {

  private meetingForm: FormGroup;
  private submitted = false;

  constructor(private formBuilder: FormBuilder,
              private roomsService:RoomsService,
              private reservationService:ReservationsService) { }

  ngOnInit() {       
      this.meetingForm = this.formBuilder.group({
        name: ['', Validators.required],            //nya
        dateIn: ['', Validators.required], //email
        dateOut: ['', Validators.required], //asunto
        person: ['', Validators.required], //postre
        room: ['', Validators.required] //mensaje
    });
  }

  get f() { return this.meetingForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.meetingForm.invalid) {
          return;
      }
  }
}
