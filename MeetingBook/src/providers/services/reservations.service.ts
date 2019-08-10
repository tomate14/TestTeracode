import { Injectable } from '@angular/core';
import { Reservation } from '../DTO/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  public _reservation:Reservation[];

  constructor() { 
    this._reservation = [];
  }

  addReservation(reservation:Reservation){
    this._reservation.push(reservation);
  }

  deleteReservation(reservation:Reservation){
    this._reservation = this._reservation.filter((reserv)=>{
      return reserv.id != reservation.id
    });    
  }
  
}
