package dto;

import java.util.ArrayList;

import dto.person.PersonSchool;

public class Curse {
	
	private ArrayList<PersonSchool> persons;

	public Curse(ArrayList<PersonSchool> persons) {
		super();
		this.persons = persons;
	}

	public ArrayList<PersonSchool> getPersons() {
		return persons;
	}

	public void setPersons(ArrayList<PersonSchool> persons) {
		this.persons = persons;
	}
	
	
}
