package calculators;

import java.util.ArrayList;
import java.util.HashMap;

import dto.person.PersonSchool;
import dto.person.Student;


public abstract class AbsCalculator {

	public abstract HashMap<String, Object> calculate(ArrayList<PersonSchool> student);
}
