package com.central.repo;

import org.springframework.data.repository.CrudRepository;

import com.central.bo.Login;

import java.util.List;

public interface LoginRepository extends CrudRepository<Login, Long> {

    List<Login> findByName(String name);
    
    Login findByEmail(String email);

    Login findByToken(String token);
}
