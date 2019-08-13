package dto.person;

import java.util.Date;


public class PersonSchool{

	protected String name;
	protected String lastName;
	protected Date birthday;
	protected String id;
	
	public PersonSchool(String id, String name,String lastName, Date birthday) {
		super();
		this.id = id;
		this.name     = name;
		this.lastName = lastName;
		this.birthday = birthday;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "PersonSchool [name=" + name + ", lastName=" + lastName + ", birthday=" + birthday + ", id=" + id + "]";
	}
	
	
	
	
	
}
