package com.nagasai.crud.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagasai.crud.entity.Employee;

public interface Repo extends JpaRepository<Employee, Integer> {

}
