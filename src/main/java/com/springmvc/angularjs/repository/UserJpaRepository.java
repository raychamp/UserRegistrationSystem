package com.springmvc.angularjs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springmvc.angularjs.dto.UserDTO;

@Repository
public interface UserJpaRepository extends JpaRepository<UserDTO, Long> {

	UserDTO findByName(String name);

	UserDTO findAllById(Long id);

}
