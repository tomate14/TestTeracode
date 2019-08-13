import { Injectable } from '@angular/core';
import { Reservation } from '../DTO/Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  public _reservation:Reservation[];
  public _viewReservation:Reservation;
  private storageKey:string="RESERVATION";
  constructor() { 
    
    this._reservation = JSON.parse(localStorage.getItem(this.storageKey));
    if(this._reservation == null){
      this._reservation = [];
    }

  }

  addReservation(reservation:Reservation){
    let exist = this._reservation.find((reserv)=>{
        return reserv.id == reservation.id;
    });
    
    if(exist == undefined){
      this._reservation.push(reservation);
    }else{
      exist = reservation;
    }
    this._viewReservation = null;
    this.saveReservation();
  }

  deleteReservation(reservation:Reservation){
    this._reservation = this._reservation.filter((reserv)=>{
      return reserv.id != reservation.id
    });    
  }

  saveReservation(){
    localStorage.setItem(this.storageKey,JSON.stringify(this._reservation));
  }

  getReservations(){
    
  }
  
}
