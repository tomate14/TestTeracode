package dto.person;

import java.util.Date;

public class Janitor extends AbsEmployees {

	public Janitor(String id, String name, String lastName, Date birthday, String salary) {
		super(id, name, lastName, birthday, salary);
	}

	@Override
	public double getSalary() {
		// TODO Auto-generated method stub
		double result = Float.valueOf(this.salary)*1.05;
		return result;
	}


}
