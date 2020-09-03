package com.zemoso.bookreadapp.bookmanagementservice.exception;

public class InvalidSearchException extends RuntimeException{
    public InvalidSearchException(String message){
        super(message);
    }
}
