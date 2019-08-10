package calculators;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import dto.person.PersonSchool;
import dto.person.Student;
import filters.IFilter;

public class CalculatorSubject extends AbsCalculator {

	private IFilter filter;
	
	
	public CalculatorSubject(IFilter filter) {
		super();
		this.filter = filter;
	}


	@Override
	public HashMap<String, Object> calculate(ArrayList<PersonSchool> students) {
		HashMap<String, Object> studentsResult = new HashMap<>();
		
		for(PersonSchool student:students) {	
			
			if(!studentsResult.containsKey(student.getId())) {
				
				if(((Student)student).getSubjects() != null) {
					
					if(filter.valid(student)) {
						
						studentsResult.put(student.getId(), student);				
					}
					
				}
				
			}							
		}
		return studentsResult;
		
	}

}
