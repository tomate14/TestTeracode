import java.util.ArrayList;
import java.util.Date;

import calculators.AbsCalculator;
import calculators.CalculatorFirstLetter;
import calculators.CalculatorSubject;
import dto.School;
import dto.person.Employee;
import dto.person.Janitor;
import dto.person.PersonSchool;
import dto.person.Student;
import filters.FilterSubjects;
import filters.IFilter;

public class Main {

	public static void main(String[] args) {
		
		ArrayList<String> subjects1 = new ArrayList();		
		subjects1.add("Math");
		subjects1.add("Geography");
		subjects1.add("History");		

		ArrayList<String> subjects2 = new ArrayList();		
		subjects2.add("Math");
		subjects2.add("Geography");
		
		ArrayList<String> subjects3 = new ArrayList();		
		subjects3.add("Math");
		
		Student student1 = new Student("1","Mariano","Rodriguez", new Date(), subjects1);		
		Student student2 = new Student("2","Maximiliano","Roselli", new Date(),subjects2);
		Student student3 = new Student("3","Matias","Quiroga", new Date(),subjects3);
		Student student4 = new Student("4","Martin","Gutierrez", new Date(),null);
		
		
		ArrayList<PersonSchool> students = new ArrayList<>();
		students.add(student1);
		students.add(student2);
		students.add(student3);
		students.add(student4);	
		
		Employee employee1 = new Employee("5","Alberto","Juarez", new Date(), "$15000");
		Janitor janitor1 = new Janitor("6","Roberto","Quinteros", new Date(), "$10000");
		ArrayList<PersonSchool> employees = new ArrayList<>();
		employees.add(employee1);
		employees.add(janitor1);

		School school = new School("Escuela 104", "Rodriguz 1050",students,employees);
		
		IFilter filterSubject = new FilterSubjects(0);
		
		AbsCalculator calculatorFirstLetter = new CalculatorFirstLetter();
		System.out.println(school.getAllStudents(calculatorFirstLetter).toString());
		
		
		AbsCalculator calculatorSubjects = new CalculatorSubject(filterSubject);
		System.out.println(school.getAllStudents(calculatorSubjects).toString());
		
		
		
		
		
		

	}

}
