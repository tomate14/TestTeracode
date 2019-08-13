import { Injectable } from '@angular/core';
import { Person } from '../DTO/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  public _person:Person;
  constructor() { 
    this._person = new Person(1,"Maximiliano","Roselli","maxiroselli@gmail.com");
  }
}
