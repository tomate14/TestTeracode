package dto;

import java.util.ArrayList;
import java.util.HashMap;

import calculators.AbsCalculator;
import dto.person.PersonSchool;
import dto.person.Student;

public class School {


	private String name;
	private String address;
	private ArrayList<PersonSchool> students;
	private ArrayList<PersonSchool> employees;
	
	public School(String name, String address, ArrayList<PersonSchool> students, ArrayList<PersonSchool> employees) {
		super();
		this.name = name;
		this.address = address;
		this.students = students;
		this.employees = employees;
	}	
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}	
	
	
	public HashMap<String, Object> getAllStudents(AbsCalculator calc){
		return calc.calculate(this.students);
	}
	
	
	
	
	
}
