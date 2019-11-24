package com.central.helper;

import org.apache.commons.codec.digest.DigestUtils;

public class LoginHelper {

	private static final String ABCDEFGHIJKLMNOPQRSTUVWXYZ = "abcdefghijklmnopqrstuvwxyz0123456789@#$!%*";
	private int numCasas;

	public LoginHelper(int casas) {
		this.numCasas = casas;
	}

	public String deSifra(String cifrado) {
		StringBuilder texto = new StringBuilder();
		char[] arr = cifrado.toCharArray(); 
        for (int i = 0; i < arr.length; i++) { 
        	texto.append(this.desConverte(arr[i], numCasas));
	    }
		return texto.toString();		 
	}
	
	public String sifra(String texto) {
		StringBuilder cifrado = new StringBuilder();
		char[] arr = texto.toCharArray(); 
        for (int i = 0; i < arr.length; i++) { 
        	cifrado.append(this.converte(arr[i], numCasas));
	    }
        String sha256hex = DigestUtils.sha256Hex(cifrado.toString());
		return sha256hex;
	}
	
	private String converte(char letra, int numero_casas) {
        String alfabeto = ABCDEFGHIJKLMNOPQRSTUVWXYZ;
        int posicao = alfabeto.indexOf(letra);
        if (posicao<0) {
            return letra+"";
        } else {
            int novaPosicao = posicao+numero_casas;
            if (novaPosicao>alfabeto.length()) {
                novaPosicao = novaPosicao-alfabeto.length();
            }
            return alfabeto.substring(novaPosicao, novaPosicao+1);  
        }
    }    
   
    private String desConverte(char letra, int numero_casas) {
        String alfabeto = ABCDEFGHIJKLMNOPQRSTUVWXYZ;
        int posicao = alfabeto.indexOf(letra);
        if (posicao<0) {
            return letra+"";
        } else {
            int novaPosicao = posicao-numero_casas;
            if (novaPosicao<0) {
                novaPosicao = alfabeto.length()+novaPosicao;
            }
            return alfabeto.substring(novaPosicao, novaPosicao+1);  
        }
    } 
}
