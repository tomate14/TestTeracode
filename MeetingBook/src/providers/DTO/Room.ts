export class Room{
     public name:string;
     public id:number;
     public max_capacity:number;

     constructor(_name:string, _id:number, _max_capacity:number){
          this.name = _name;
          this.id = _id;
          this.max_capacity = _max_capacity;
     }

}