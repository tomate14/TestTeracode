package calculators;

import java.util.ArrayList;
import java.util.HashMap;

import dto.person.PersonSchool;
import dto.person.Student;

public class CalculatorFirstLetter extends AbsCalculator {


	@Override
	public HashMap<String, Object> calculate(ArrayList<PersonSchool> students) {
		HashMap<String,Object> studentsResult = new HashMap<>();
		
		for(PersonSchool student:students) {
			if(student.getLastName().length() > 0) {
				
				String firstLetter = String.valueOf(student.getLastName().charAt(0));
				
				if(studentsResult.containsKey(firstLetter)) {
//				ArrayList<Student> studentAux = studentsResult.get(student.getLastName().charAt(0));
					((ArrayList<PersonSchool>) studentsResult.get(firstLetter)).add((Student)student);
				}else {
					ArrayList<PersonSchool> studentAux = new ArrayList<PersonSchool>();
					studentAux.add((Student)student);
					studentsResult.put(firstLetter, studentAux);
				}
				
			}
		}
		return studentsResult;
	}

}
