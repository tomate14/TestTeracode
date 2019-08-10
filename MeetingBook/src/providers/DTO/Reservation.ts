import { Room } from './room';
import { Person } from './Person';

export class Reservation{
    public id:number;
    public dateIn:Date;
    public dateOut:Date;
    public room:Room;
    public person_create:Person;
}