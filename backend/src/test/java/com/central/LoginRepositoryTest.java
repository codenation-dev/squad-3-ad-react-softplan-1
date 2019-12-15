package com.central;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import com.central.bo.Login;
import com.central.repo.LoginRepository;

@RunWith(SpringRunner.class)
@DataJpaTest
public class LoginRepositoryTest {

    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private LoginRepository repository;

    @Test
    public void testFindByName() {

        entityManager.persist(new Login("cleverson", "cleverson@softplan.com.br", "123","1"));

        List<Login> users = repository.findByName("cleverson");
        assertEquals(1, users.size());

        assertThat(users).extracting(Login::getName).containsOnly("cleverson");
        
    }

    @Test
    public void testFindByEmail() {

        entityManager.persist(new Login("cleverson", "cleverson@softplan.com.br", "123","1"));

        Login login = repository.findByEmail("cleverson@softplan.com.br");
        assertEquals("cleverson", login.getName());      
    }
}
