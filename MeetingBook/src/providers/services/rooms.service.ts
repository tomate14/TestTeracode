import { Injectable } from '@angular/core';
import { Room } from '../DTO/room';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  public _rooms:Room[] = [];

  constructor() { 
    this._rooms.push(new Room("Room 1",1,10));
    this._rooms.push(new Room("Room 2",2,5));
    this._rooms.push(new Room("Room 3",3,7));
    this._rooms.push(new Room("Room 4",4,11));
    this._rooms.push(new Room("Room 5",5,15));
    this._rooms.push(new Room("Room 6",6,20));
    this._rooms.push(new Room("Room 7",7,30));
  }
  
}
