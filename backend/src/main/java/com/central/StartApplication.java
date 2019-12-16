package com.central;

import java.sql.Date;
import java.util.Calendar;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.central.bo.Log;
import com.central.bo.Login;
import com.central.repo.LogRepository;
import com.central.repo.LoginRepository;

@SpringBootApplication
public class StartApplication implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(StartApplication.class);

    @Autowired
    private LoginRepository loginRepo;

	@Autowired
    private LogRepository logRepo;
	
   public static ConcurrentHashMap<String, String> securityParams = new ConcurrentHashMap<>();
   
   public static void main(String[] args) {
        SpringApplication.run(StartApplication.class, args);
    }

    @Override
    public void run(String... args) {

        log.info("StartApplication...");

        loginRepo.save(new Login("cleverson", "cleverson@softplan.com.br", "123","1"));
        loginRepo.save(new Login("marcelo", "marcelo@hotmail.com", "123","2"));
        loginRepo.save(new Login("jaquiel", "jaquiel.paim@gmail.com", "123","3"));
        loginRepo.save(new Login("jerson", "jersonseling@yahoo.com.br", "123","4"));
        Calendar cal = Calendar.getInstance();
        for(int i=0; i<104;i++) {
        	String title = "Log de inicialização da app";
        	String type = getType();
        	String orign = "Gerado pelo Sistema";
        	String detail = "Detalhe do "+title+" gerado pelo "+ orign+" com na sequencia "+i;
        	Long quantity = new Long(i);
        	java.sql.Date dataSql = new java.sql.Date(cal.getTime().getTime());
        	Log log = new Log(title, type, orign, detail, quantity, dataSql);
            logRepo.save(log);
        }
        System.out.println("\n Usuários findAll()");
        loginRepo.findAll().forEach(x -> System.out.println(x));

        System.out.println("\nUsuário findById(1L)");
        loginRepo.findById(1l).ifPresent(x -> System.out.println(x));

        System.out.println("\nUsuário findByName('cleverson')");
        loginRepo.findByName("cleverson").forEach(x -> System.out.println(x));

        System.out.println("\nUsuário findByEmail('cleverson')");
        Login login = loginRepo.findByEmail("cleverson@softplan.com.br");
        System.out.println(login);
    }

	private String getType() {
		String type;
		Random gerador = new Random();
		switch (gerador.nextInt(4)) {
		  case 1:
		    type = "WARNING";
		    break;
		  case 2:
			  type = "DEBUG";
		    break;
		  case 3:
			  type = "ERROR";
		    break;
		  default:
			  type = "INFO";
		}
		return type;
	}
}