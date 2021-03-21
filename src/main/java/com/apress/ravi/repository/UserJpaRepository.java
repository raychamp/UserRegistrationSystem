package com.apress.ravi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.apress.ravi.dto.UserDTO;

@Repository
public interface UserJpaRepository extends JpaRepository<UserDTO, Long> {

	UserDTO findByName(String name);

	UserDTO findAllById(Long id);

}
