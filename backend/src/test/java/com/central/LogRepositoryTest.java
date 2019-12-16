package com.central;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.util.Calendar;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.central.bo.Log;
import com.central.bo.Login;
import com.central.repo.LogRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class LogRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private LogRepository repository;

    @Test
    public void testFindByName() {

    	//geraLog("TESTE", "TESTE DE LOG", "orign", "detail");
        List<Log> logs = repository.findByName("cleverson");
        assertEquals(1, logs.size());

        assertThat(logs).extracting(Log::getName).containsOnly("cleverson");
        
    }

    
    private void geraLog(String type, String title, String orign, String detail) {
    	Long quantity = new Long(1);
    	Calendar cal = Calendar.getInstance();
    	java.sql.Date dataSql = new java.sql.Date(cal.getTime().getTime());
    	Log log = new Log(title, type, orign, detail, quantity, dataSql);
    	entityManager.persist(log);
	}
}
