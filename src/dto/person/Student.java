package dto.person;


import java.util.ArrayList;
import java.util.Date;


public class Student extends PersonSchool {

	private ArrayList<String> subjects;
	
	public Student(String id, String name, String lastName, Date birthday, ArrayList<String> subjects) {
		super(id,name,lastName, birthday);
		this.subjects = subjects;
	}


	public ArrayList<String> getSubjects() {
		return subjects;
	}

	public void setSubjects(ArrayList<String> subjects) {
		this.subjects = subjects;
	}


	@Override
	public String toString() {
		return "Student [subjects=" + subjects + "]";
	}
	
	
	


}
