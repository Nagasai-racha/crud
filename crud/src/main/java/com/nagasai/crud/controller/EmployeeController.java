package com.nagasai.crud.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import com.nagasai.crud.dao.Repo;
import com.nagasai.crud.entity.Employee;

@RestController
@CrossOrigin
public class EmployeeController {
	
		@Autowired
		Repo repo;
	
	@PostMapping("/api/emp")
	public ResponseEntity<Employee> save(@RequestBody Employee employee) {
		return new ResponseEntity<>(repo.save(employee),HttpStatus.OK);
	}
	
	@GetMapping("/api/emp")
	public ResponseEntity<List<Employee>> getAll(){
		return new ResponseEntity<>(repo.findAll(),HttpStatus.OK);
	}
	
	@GetMapping("/api/emp/{id}")
	public ResponseEntity<Employee> getOne(@PathVariable int id){
		Optional<Employee> employee = repo.findById(id);
		if(employee.isPresent()) {
			return new ResponseEntity<>(employee.get(),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/api/emp/{id}")
	public ResponseEntity<Employee> getOneAndUpdate(@PathVariable int id,@RequestBody Employee emp){
		Optional<Employee> employee = repo.findById(id);
		if(employee.isPresent()) {
			employee.get().setEmpName(emp.getEmpName());
			employee.get().setEmpEmail(emp.getEmpEmail());
			employee.get().setEmpTech(emp.getEmpTech());
			return new ResponseEntity<>(repo.save(employee.get()),HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/api/emp/{id}")
	public ResponseEntity<Void> getOneAndDelete(@PathVariable int id){
		Optional<Employee> employee = repo.findById(id);
		if(employee.isPresent()) {
			repo.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
