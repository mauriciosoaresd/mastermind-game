package com.mastermindbackend.dto;
public class TokenDto {
	String value;
	public TokenDto() {}
	public TokenDto(String value) {
		this.value = value;
	}
	public String getValue() { return value; }
	public void setValue(String value) {
		this.value = value;
	}
	
}
