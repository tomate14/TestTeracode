export class Person{
    public idPerson:number;
    public name:string;
    public lastName:string;
    public birthday:Date;
    public email:string;

    constructor(_idPerson:number, _name:string, _lastName:string, _email:string){
        this.idPerson = _idPerson;
        this.name = _name;
        this.lastName = _lastName;
        this.birthday = new Date();
        this.email = _email;
    }
}