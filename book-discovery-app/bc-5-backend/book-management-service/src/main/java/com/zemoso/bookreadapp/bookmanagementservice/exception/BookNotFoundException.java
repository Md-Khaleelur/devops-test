package com.zemoso.bookreadapp.bookmanagementservice.exception;

public class BookNotFoundException extends RuntimeException{
    public BookNotFoundException(int bookId){
        super("Book with id : " + bookId + " not found");
    }
}
