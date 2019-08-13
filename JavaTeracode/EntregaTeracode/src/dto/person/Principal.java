package dto.person;

import java.util.ArrayList;
import java.util.Date;


public class Principal extends AbsEmployees{

	

	public Principal(String id, String name,String lastName, Date birthday, String salary) {
		super(id, name, lastName, birthday, salary);
	}

	@Override
	public double getSalary() {
		// TODO Auto-generated method stub
		double result = Float.valueOf(this.salary)*1.15;
		return result;
	}


	
}
