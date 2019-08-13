import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { RoomsService } from 'src/providers/services/rooms.service';
import { ReservationsService } from 'src/providers/services/reservations.service';
import { GuestsService } from 'src/providers/services/guests.service';
import { Reservation } from 'src/providers/DTO/Reservation';
import { PersonService } from 'src/providers/services/person.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-charge-meeting',
  templateUrl: './charge-meeting.component.html',
  styleUrls: ['./charge-meeting.component.scss']
})
export class ChargeMeetingComponent implements OnInit {

  private meetingForm: FormGroup;
  private submitted = false;
  private email:string;
  private guests:string[];

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private roomsService:RoomsService,
              private reservationService:ReservationsService,
              private personService:PersonService,
              private guestService:GuestsService) { 

      this.email = "";
      this.guests = [];
  }

  ngOnInit() {       
      let name = "";
      let dateIn = "";;
      let dateOut = "";
      let room = "";

      if(this.reservationService._viewReservation != null || this.reservationService._viewReservation != undefined){
        name = this.reservationService._viewReservation.name;
        //Convertion for inputs values

        dateIn = this.reservationService._viewReservation.dateIn;
        dateOut = this.reservationService._viewReservation.dateOut;
        room = this.reservationService._viewReservation.room.id.toString();
        this.guests = this.reservationService._viewReservation.guests;
      }

      this.meetingForm = this.formBuilder.group({
        name: [name, Validators.required],         
        dateIn: [dateIn, Validators.required], 
        dateOut: [dateOut, Validators.required], 
        room: [room, Validators.required] 
    },{validator: this.dateLessThan('dateIn', 'dateOut')});


  }

  dateLessThan(from: string, to: string) {
      return (formBuilder: FormGroup): {[key: string]: any} => {        
        let f = formBuilder.controls[from];
        let t = formBuilder.controls[to];
        let dataFrom = new Date(f.value);
        let dataTo = new Date(t.value);
        if (dataFrom.getTime() > dataTo.getTime()) {
          return {
            dates: "Date Start should be less than Date Finish"
          };
        }else{
          let dateResult = (dataTo.getTime() - dataFrom.getTime());
          let minuts = Math.round((dateResult/1000)/60);
          if(minuts <= 15 || minuts > 180){
            return {
              dates: "The meeting should take between 15 and 180 minutes"
            };
          }
        }
        return {};
      }
  }

  get f() { return this.meetingForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.meetingForm.valid) {
          let id = 0;
          if(this.reservationService._viewReservation == null){
            id = this.reservationService._reservation.length+1;            
          }else{
            id = this.reservationService._viewReservation.id;
          }
          let room = this.roomsService._rooms.find((room)=>{
              return room.id == parseInt(this.meetingForm.value.room);
          });
          let _newReservation = new Reservation(id,this.meetingForm.value.name,this.meetingForm.value.dateIn, this.meetingForm.value.dateOut,room,this.personService._person,this.guests);
          this.reservationService.addReservation(_newReservation);
          this.router.navigate(["/viewMeeting"]);
      }

  }

  addGuest(){
    if(this.meetingForm.value.room != ""){
      let room = this.roomsService._rooms.find((room)=>{
        return room.id == parseInt(this.meetingForm.value.room);
      });

      if(room.max_capacity > this.guests.length){
        if(this.email.includes("@")){
          this.guests.push(this.email);
          //this.reservationService._newReservation.guests.push(this.email);
          this.email = "";
        }
      }
    }
  }

  deleteGuest(newGuest:string){
    this.guests = this.guests.filter((guest)=>{
      return guest != newGuest;
    });
  }
}
