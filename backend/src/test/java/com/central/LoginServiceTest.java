package com.central;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import com.central.helper.LoginHelper;

public class LoginServiceTest {

	 @Test
	 public void sifraTest() {
		 
		LoginHelper service = new LoginHelper(3);
		
		String texto = "senha@123";
		String sifrado = service.sifra(texto);
		System.out.println(sifrado);
		assertEquals(texto, service.deSifra(sifrado));		
		 
	 }
}
