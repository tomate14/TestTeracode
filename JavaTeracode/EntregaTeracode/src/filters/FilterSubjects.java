package filters;

import dto.person.PersonSchool;
import dto.person.Student;

public class FilterSubjects implements IFilter {

	
	private int number;
	
	
	public FilterSubjects(int number) {
		super();
		this.number = number;
	}


	@Override
	public boolean valid(PersonSchool person) {
		int numberSubjects = ((Student)person).getSubjects().size();
		if( numberSubjects > this.number) {
			return true;
		}
		return false;
	}

}
