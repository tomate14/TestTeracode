import { Room } from './room';
import { Person } from './Person';

export class Reservation{
    public id:number;
    public name:string;
    public dateIn:Date;
    public dateOut:Date;
    public room:Room;
    public person_create:Person;
    public guests:string[];

    constructor(_id:number,_name:string, _dateIn:Date, _dateOut:Date, _room:Room, _person_create:Person,_guests:string[]){
        this.id = _id;
        this.dateIn = _dateIn;
        this.dateOut = _dateOut;
        this.room = _room;
        this.name = _name;
        this.person_create = _person_create;
        this.guests = _guests;
    }
}