package com.zemoso.bookreadapp.usermanagementservice.controller;

import com.zemoso.bookreadapp.usermanagementservice.model.BookreadEntity;
import com.zemoso.bookreadapp.usermanagementservice.service.BookreadService;
import com.zemoso.bookreadapp.usermanagementservice.service.impl.BookreadServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users/{userId}")
public class BookreadController {
    protected static final Logger LOGGER = LoggerFactory.getLogger(BookreadController.class);

    private final BookreadService bookreadService;

    public BookreadController(BookreadServiceImpl bookreadServiceImpl) {
        this.bookreadService = bookreadServiceImpl;
    }

    // GET: /users/{userId}/bookreads
    @GetMapping(value = "/bookreads", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getBookreads(@PathVariable("userId") long userId) {
        LOGGER.debug("Received request for list all bookreads");
        List<String> bookreadsList = null;
        try {
            bookreadsList = bookreadService.getBookreadsByUserId(userId);
            //TODO convert the list to json object by using Google json
            return new ResponseEntity<String>(bookreadsList.toString(), HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Not able to fetch the data, due to error: " + e.getMessage());
        }
        return new ResponseEntity<String>(bookreadsList.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // GET: /users/{userId}/bookreads/{bookreadId}
    @GetMapping(value = "/bookreads/{bookreadId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getBookreadById(@PathVariable("bookreadId") long bookreadId) {
        LOGGER.debug("Request for bookreads by bookreadid");
        BookreadEntity bookReadEntity = null;
        try {
            bookReadEntity = bookreadService.getBookreadsByBookreadId(bookreadId);
            //TODO convert the bookreadEntity to json object by using Google json
            return new ResponseEntity<String>(bookReadEntity.toString(), HttpStatus.OK);
        } catch (Exception e) {
            LOGGER.error("Not able to fetch the data, due to error: " + e.getMessage());
        }
        return new ResponseEntity<String>(bookReadEntity.toString(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
/*
    // POST: /users/{userId}/bookreads
    @PostMapping(value = "/bookreads",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> saveBookreads(@RequestBody String bookreadData) {
        LOGGER.debug("Received request to save bookreads");
        BookreadEntity bookReadEntity = null;
        try {
            bookReadEntity =  bookreadService.saveBookread(bookreadData);
            return new ResponseEntity<String>(HttpStatus.OK);
        } catch (Exception e){
            LOGGER.error("Not able to store the data, due to error: "+e.getMessage());
        }
        return new ResponseEntity<String>( HttpStatus.INTERNAL_SERVER_ERROR);
    }

    //PATCH: /users/{userId}/bookreads/{bookreadId}
    @PatchMapping(value = "/bookreads/{bookreadId}",
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> saveBookreads(@RequestBody String bookreadData,
                                                @PathVariable("userId") long userId,
                                                @PathVariable("bookreadId") long bookreadId) {
        LOGGER.debug("Received request to udpate bookreads");
        BookreadEntity bookReadEntity = null;
        try {
            bookReadEntity =  bookreadService.updateBookRead(bookreadData,userId,bookreadId);
            return new ResponseEntity<String>(HttpStatus.OK);
        } catch (Exception e){
            LOGGER.error("Not able to udpate the data, due to error: "+e.getMessage());
        }
        return new ResponseEntity<String>( HttpStatus.INTERNAL_SERVER_ERROR);
    }*/
}
