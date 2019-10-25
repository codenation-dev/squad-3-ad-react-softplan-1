package com.central.error;

public class CentralNotFoundException extends RuntimeException {

    private static final long serialVersionUID = -570094041918743456L;

	public CentralNotFoundException(String email) {
        super("email not found : " + email);
    }

}
