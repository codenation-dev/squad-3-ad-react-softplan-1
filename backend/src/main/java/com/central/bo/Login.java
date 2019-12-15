package com.central.bo;

import java.io.IOException;
import java.util.Map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Entity
public class Login {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String email;
    private String pwd;
    private String token;
    
    public Login() {
    }

    public Login(String name, String email, String pwd, String token) {
        this.name = name;
        this.email = email;
        this.pwd = pwd;
        this.setToken(token);
    }

    @Override
    public String toString() {
        return "Login{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                 ", token='" + getToken() + '\'' +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long value) {
        this.id = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String value) {
        this.name = value;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String value) {
        this.email = value;
    }

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
	public static Login jsonToLogin(String json) throws JsonParseException, JsonMappingException, IOException {

		ObjectMapper mapper = new ObjectMapper();
		Map<String, Object> map = mapper.readValue(json, Map.class);
		Login login = new Login();
		login.setName((String)map.get("name"));
		login.setEmail((String)map.get("email"));
		login.setPwd((String)map.get("pwd"));
		return login;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
