package filters;

import dto.person.PersonSchool;

public interface IFilter {
	
	public boolean valid(PersonSchool person);
	
}
