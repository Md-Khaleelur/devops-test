package com.zemoso.bookreadapp.usermanagementservice.service.impl;

import com.zemoso.bookreadapp.usermanagementservice.model.BookreadEntity;
import com.zemoso.bookreadapp.usermanagementservice.service.BookreadService;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class BookreadServiceImpl implements BookreadService {
@Override
    public List<String> getBookreadsByUserId(long userId) {
        return Arrays.asList("bookread-1", "bookread-2");
    }

    public BookreadEntity getBookreadsByBookreadId(long bookreadId) {
        return new BookreadEntity(bookreadId);
    }

  /*  public BookreadEntity saveBookread(String bookreadData) {
        return new BookreadEntity();
    }

    public BookreadEntity updateBookRead(String bookreadData, long userId, long bookreadId) {
        return new BookreadEntity();
    }*/
}
