package com.fhery021.tasks;

import com.fhery021.tasks.domain.Task;
import com.fhery021.tasks.service.TaskService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

@SpringBootApplication
public class TasksApplication {

	public static void main(String[] args) {
		SpringApplication.run(TasksApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(TaskService taskService) {
		return args -> {
			taskService.save(new Task(
					1L,
					"Create Spring Boot app",
					LocalDate.now(),
					true));
			taskService.save(new Task(
					2L,
					"Create Spring Project packages",
					LocalDate.now().plusDays(2),
					true));
			taskService.save(new Task(
					3L
					, "Create Task domain class",
					LocalDate.now().plusDays(3),
					false));
			taskService.save(new Task(
					4L,
					"Service and repo creation",
					LocalDate.now().plusDays(5),
					false));
			taskService.save(new Task(
					5L,
					"Command line runner",
					LocalDate.now().plusDays(6),
					false));
			taskService.save(new Task(
					6L,
					"Config properties",
					LocalDate.now().plusDays(7),
					false));
			taskService.save(new Task(
					7L,
					"Test Spring Boot running",
					LocalDate.now().plusDays(8),
					false));
			taskService.save(new Task(
					8L,
					"H2",
					LocalDate.now().plusDays(9),
					false));
		};
	}
}
