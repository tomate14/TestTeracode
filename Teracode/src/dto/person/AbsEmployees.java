package dto.person;

import java.util.Date;

public abstract class AbsEmployees extends PersonSchool {
	protected String salary;

	protected AbsEmployees(String id, String name,String lastName, Date birthday, String salary) {
		super(id, name,lastName, birthday);
		this.salary = salary;
	}
	
	public abstract double getSalary();


}
