package com.zemoso.bookreadapp.bookmanagementservice.exception;


import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ControllerAdvice
@Slf4j
public class BookServiceExceptionHandler {

    @ExceptionHandler(value = Exception.class)
    public ResponseEntity<BookServiceErrorResponse> handleException(Exception exception){
        BookServiceErrorResponse error = new BookServiceErrorResponse();
        error.setStatus(HttpStatus.BAD_REQUEST.value());
        error.setMessage(exception.getMessage());
        return new ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
    }
}
