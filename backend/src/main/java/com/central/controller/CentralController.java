package com.central.controller;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

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

import com.central.StartApplication;
import com.central.bo.Log;
import com.central.bo.LogPaginado;
import com.central.bo.Login;
import com.central.bo.LoginResultado;
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
    
	
    @RequestMapping(value = "login", method = RequestMethod.POST)	
	@CrossOrigin(maxAge = 3600)
	@ResponseBody
	public LoginResultado login(HttpServletRequest request, HttpServletResponse response, @RequestBody String jsonSecurity) {
		System.out.println("login");
		LoginResultado resultado = new LoginResultado();
		resultado.setToken("");
		try {
			Login login = Login.jsonToLogin(jsonSecurity);
			
			Login loginBase = loginRepo.findByEmail(login.getEmail());
			if (loginBase==null) {
		    	geraLog("ERRO", "tentativa de login", login.getEmail(), "tentativa de login - email não cadastrado");
				resultado.setStatus("Usuário não cadastrado");
				return resultado;
			}
			if (!login.getPwd().equals(loginBase.getPwd())) {
		    	geraLog("ERRO", "tentativa de login", login.getEmail(), "tentativa de login - senha incorreta");
				resultado.setStatus("Senha incorreta");
				return resultado;
			}
			LoginHelper service = new LoginHelper(3);
			String token = service.sifra(login.getEmail());
			StartApplication.securityParams.put(token, jsonSecurity);
	    	String detail = "login efetuado pelo "+login.getName();
	    	geraLog("INFO", "login", login.getName(), detail);
			resultado.setStatus("OK");
	    	resultado.setToken(token);
		} catch (Exception e) {
	    	geraLog("ERRO", "login", "", "erro na api de login");
			resultado.setStatus(e.getMessage());
		}
		return resultado;
	}
    
    // FindAll logs
    @GetMapping("/logs/{token}")
    @CrossOrigin(maxAge = 3600)
    public List<Log> findAllLogs(@PathVariable String token) {
    	String orign = processaLogin(token);
    	String detail = "busca de todos os logs da aplicação pelo token "+token;
    	geraLog("INFO", "findAllLogs", orign.equals("")? token : orign, detail);

        return new ArrayList<Log>((Collection<? extends Log>) logRepo.findAll());
    }

    // FindAll logs
    @GetMapping("/paglogs/{pag}/{token}")
    @CrossOrigin(maxAge = 3600)
    public LogPaginado findAllLogs(@PathVariable int pag, @PathVariable String token) {
    	int pagina = pag-1;
    	LogPaginado logPaginado = new LogPaginado();

        List<Log> arrayList = new ArrayList<Log>((Collection<? extends Log>) logRepo.findAll());
        logPaginado.setTotal(arrayList.size());
        List<Log> arrayListPaginado = new ArrayList<Log>();
//        if (pagina*10>=arrayList.size()) {
//        	logPaginado.setLogs(new ArrayList<Log>());
//        }
        for(int i=0;i<10;i++) {
        	if (i+pagina*10>=arrayList.size()) {
        		logPaginado.setLogs(arrayListPaginado);
        		return logPaginado;
        	}
        	arrayListPaginado.add(arrayList.get(i+pagina*10));
        }
		logPaginado.setLogs(arrayListPaginado);
		return logPaginado;
    }

    private void geraLog(String type, String title, String orign, String detail) {
    	Long quantity = new Long(1);
    	Calendar cal = Calendar.getInstance();
    	java.sql.Date dataSql = new java.sql.Date(cal.getTime().getTime());
    	Log log = new Log(title, type, orign, detail, quantity, dataSql);
        logRepo.save(log);
	}

    // Arquiva log by ID
    @GetMapping("/arquivalog/{id}/{token}")
    @CrossOrigin(maxAge = 3600)
    public void arquivalog(@PathVariable String token, @PathVariable Long id) {
    	String orign = processaLogin(token);
    	String detail = "arquiva log pelo id "+id;
    	geraLog("INFO", "arquivalog", orign.equals("")? token : orign, detail);

    	Optional<Log> logAux = logRepo.findById(id);
    	Log log = logAux.get();
    	log.setSituacao("A");
    	logRepo.save(log);        
    }

    // Delete by ID
    @GetMapping("/deletelog/{id}/{token}")
    @CrossOrigin(maxAge = 3600)
    public void deletelog(@PathVariable String token, @PathVariable Long id) {
    	String orign = processaLogin(token);
    	String detail = "exclui log pelo id "+id;
    	geraLog("INFO", "deletelog", orign.equals("")? token : orign, detail);

    	logRepo.deleteById(id);;
    }

    // Find by ID
    @GetMapping("/log/{id}/{token}")
    @CrossOrigin(maxAge = 3600)
    public Log findlog(@PathVariable String token, @PathVariable Long id) {
    	String orign = processaLogin(token);
    	String detail = "busca pelo detalhe do log com id "+id;
    	geraLog("INFO", "findlog", orign.equals("")? token : orign, detail);

    	Optional<Log> log = logRepo.findById(id);
        return log.get();
    }

    // FindAll logins
    @GetMapping("/logins/{token}")
    @CrossOrigin(maxAge = 3600)
    public List<Login> findAllLogins(@PathVariable String token) {
		String orign = processaLogin(token);
    	String detail = "busca por todos os logins token "+token;
    	geraLog("INFO", "findAllLogins", orign.equals("")? token : orign, detail);

    	return new ArrayList<Login>((Collection<? extends Login>) loginRepo.findAll());
    }
    
    // Find
    @GetMapping("/findlogin/{token}")
    @CrossOrigin(maxAge = 3600)
    public Login findlogin(@PathVariable String token) {
		String orign = processaLogin(token);
    	String detail = "busca pelas informações do login de token "+token;
    	geraLog("INFO", "findlogin", orign.equals("")? token : orign, detail);
    	String jsonSecurity = StartApplication.securityParams.get(token);
    	return loginRepo.findByToken(token);
//    	try {
//    		
//
//			//return Login.jsonToLogin(jsonSecurity);
//		} catch (IOException e) {
//			geraLog("ERRO", "findlogin", orign.equals("")? token : orign, detail);
//			throw new CentralNotFoundException("Login não encontrado");
//		}
    }

    @RequestMapping(value = "savelogin", method = RequestMethod.POST)	
	@CrossOrigin(maxAge = 3600)
	@ResponseBody
	public Login savelogin(HttpServletRequest request, HttpServletResponse response, @RequestBody String jsonSecurity) {
		System.out.println("savelogin");
		try {
	    	Login saveLogin = Login.jsonToLogin(jsonSecurity);
	    	LoginHelper service = new LoginHelper(3);
	    	String token = service.sifra(saveLogin.getEmail());
	    	saveLogin.setToken(token);
	    	Login login = loginRepo.findByEmail(saveLogin.getEmail());
	    	if (login==null) {
	        	String detail = "salva informações do novo usuário "+saveLogin.getName();
	        	geraLog("INFO", "savelogin", saveLogin.getName(), detail);
	        	return loginRepo.save(new Login(saveLogin.getName(), saveLogin.getEmail(), saveLogin.getPwd(),saveLogin.getToken()));
	        	//return loginRepo.save();
	    	} else {
	        	String detail = "salva informações do usuário existente "+saveLogin.getName();
	        	geraLog("INFO", "savelogin", saveLogin.getName(), detail);
	    		return loginRepo.findById(login.getId())
	                .map(x -> {
	                    x.setName(saveLogin.getName());
	                    x.setEmail(saveLogin.getEmail());
	                    x.setPwd(saveLogin.getPwd());
	                    x.setToken(saveLogin.getToken());
	                    return loginRepo.save(x);
	                })
	                .orElseGet(() -> {
	                    login.setId(login.getId());
	                    return loginRepo.save(saveLogin);
	                });
	    	}
		} catch (IOException e) {
			throw new CentralNotFoundException("Informações de Login inválido");
		}		
    }

    @GetMapping("/deletelogin/{token}/{email}")
    @CrossOrigin(maxAge = 3600)
    public void deleteLogin(@PathVariable String token, @PathVariable String email) {
    	processaLogin(token);
    	Login login = loginRepo.findByEmail(email);
    	if (login == null) {
    		throw new CentralNotFoundException("Login não encontrado");
    	} 
    	String detail = "exclui usuário "+login.getName();
    	geraLog("INFO", "deleteLogin", login.getName(), detail);
        loginRepo.deleteById(login.getId());
    }
    
    
	private String processaLogin(String token) {
		return token;
//		String jsonSecurity = StartApplication.securityParams.get(token);
//		if (jsonSecurity==null) {
//	    	String detail = "Usuário não logado, favor efetuar o login na central de erros";
//	    	geraLog("ERROR", "processaLogin", token, detail);
//			throw new CentralNotFoundException(detail);
//		}
//		try {
//			Login login = Login.jsonToLogin(jsonSecurity);
//			return login.getEmail();
//		} catch (IOException e) {
//			throw new CentralNotFoundException("Informações de Login inválido");
//		}
	}

    private void writeResponse(HttpServletResponse response, String html) throws IOException {
		response.getOutputStream().write(html.getBytes(Charset.forName("UTF-8")));
		response.setHeader(CONTENT_TYPE, "text/html");
		response.setHeader(CONTENT_DISPOSITION, "inline");
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.flushBuffer();
	}
    
}
