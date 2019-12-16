package com.central.bo;

public class LoginResultado {

    private String status;
    private String token;
    
    public LoginResultado() {
    }

    public LoginResultado(String status, String token) {
        this.status = status;
        this.token = token;
    }

    @Override
    public String toString() {
        return "LoginResultado {" +
                ", status='" + status + '\'' +
                 ", token='" + token + '\'' +
                '}';
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String value) {
        this.status = value;
    }

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
}
