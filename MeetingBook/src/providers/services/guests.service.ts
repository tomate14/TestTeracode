import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  public _guests:string[];

  constructor() { 
    this._guests = [];
  }

  addGuest(guest:string){
    this._guests.push(guest);
  }

  deleteGuest(guest:string){
    this._guests = this._guests.filter((oldGuest)=>{
      return oldGuest != guest;
    });
  }


}
