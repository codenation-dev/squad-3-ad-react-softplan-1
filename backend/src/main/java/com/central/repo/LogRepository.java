package com.central.repo;

import org.springframework.data.repository.CrudRepository;

import com.central.bo.Log;

import java.util.List;

public interface LogRepository extends CrudRepository<Log, Long> {

    List<Log> findByName(String name);

}
