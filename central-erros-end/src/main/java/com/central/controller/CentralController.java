package com.central.controller;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.central.bo.Log;
import com.central.bo.Login;
import com.central.error.CentralNotFoundException;
import com.central.helper.LoginHelper;
import com.central.repo.LogRepository;
import com.central.repo.LoginRepository;

@RestController
public class CentralController {

    private static final String CONTENT_DISPOSITION = "Content-Disposition";
    private static final String CONTENT_TYPE = "Content-Type";
	
    @Autowired
    private LoginRepository loginRepo;

    @Autowired
    private LogRepository logRepo;
    
    protected static ConcurrentHashMap<String, String> securityParams = new ConcurrentHashMap<>();
	
    @RequestMapping(value = "login", method = RequestMethod.POST)	
	@CrossOrigin(maxAge = 3600)
	@ResponseBody
	public void login(HttpServletRequest request, HttpServletResponse response, @RequestBody String jsonSecurity) {
		System.out.println("login");
		try {
			Login login = Login.jsonToLogin(jsonSecurity);
			LoginHelper service = new LoginHelper(3);
			String token = service.sifra(login.getEmail()+login.getPwd());
			securityParams.put(token, jsonSecurity);
			writeResponse(response, token);
		} catch (Exception e) {
			throw new CentralNotFoundException("Não foi possível fazer o login");
		}
	}
    
    // FindAll logs
    @GetMapping("/logs/{token}")
    public List<Log> findAllLogs(@PathVariable String token) {
    	processaLogin(token);
        return new ArrayList<Log>((Collection<? extends Log>) logRepo.findAll());
    }

    // FindAll logins
    @GetMapping("/logins/{token}")
    public List<Login> findAllLogins(@PathVariable String token) {
    	processaLogin(token);
        return new ArrayList<Login>((Collection<? extends Login>) loginRepo.findAll());
    }
    
    // Find
    @GetMapping("/findlogin/{token}{email}")
    public Login findlogin(@PathVariable String token, @PathVariable String email) {
    	processaLogin(token);
    	Login login = loginRepo.findByEmail(email);
    	if (login == null) {
    		new CentralNotFoundException("Login não encontrado");
    	} 
        return login;
    }

    @RequestMapping(value = "savelogin/{token}", method = RequestMethod.POST)	
	@CrossOrigin(maxAge = 3600)
	@ResponseBody
	public Login savelogin(HttpServletRequest request, HttpServletResponse response, @PathVariable String token, @RequestBody String jsonSecurity) {
    	processaLogin(token);
		System.out.println("savelogin");
		try {
	    	Login saveLogin = Login.jsonToLogin(jsonSecurity);
	    	Login login = loginRepo.findByEmail(saveLogin.getEmail());
	    	if (login==null) {
	    		return loginRepo.save(saveLogin);
	    	} else {
	    		return loginRepo.findById(login.getId())
	                .map(x -> {
	                    x.setName(saveLogin.getName());
	                    x.setEmail(saveLogin.getEmail());
	                    x.setPwd(saveLogin.getPwd());
	                    return loginRepo.save(x);
	                })
	                .orElseGet(() -> {
	                    login.setId(login.getId());
	                    return loginRepo.save(saveLogin);
	                });
	    	}
		} catch (IOException e) {
			throw new CentralNotFoundException("Informações de Login inválidas");
		}		
    }

    @GetMapping("/deletelogin/{token}{email}")
    public void deleteLogin(@PathVariable String token, @PathVariable String email) {
    	processaLogin(token);
    	Login login = loginRepo.findByEmail(email);
    	if (login == null) {
    		new CentralNotFoundException("Login não encontrado");
    	} 
        loginRepo.deleteById(login.getId());
    }
    
    
	private void processaLogin(String token) {
		String jsonSecurity = securityParams.get(token);
		if (jsonSecurity==null) {
			throw new CentralNotFoundException("Usuário não logado, favor efetuar o login na central de erros");
		}
		try {
			Login login = Login.jsonToLogin(jsonSecurity);
		} catch (IOException e) {
			throw new CentralNotFoundException("Informaçõess de Login inválido");
		}
	}

    private void writeResponse(HttpServletResponse response, String html) throws IOException {
		response.getOutputStream().write(html.getBytes(Charset.forName("UTF-8")));
		response.setHeader(CONTENT_TYPE, "text/html");
		response.setHeader(CONTENT_DISPOSITION, "inline");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.flushBuffer();
	}
    
}
