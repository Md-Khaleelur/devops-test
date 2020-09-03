package com.zemoso.bookreadapp.usermanagementservice.service;

import com.zemoso.bookreadapp.usermanagementservice.model.BookreadEntity;

import java.util.List;

public interface BookreadService {
    List<String> getBookreadsByUserId(long userId);

    BookreadEntity getBookreadsByBookreadId(long bookreadId);
    /*BookreadEntity saveBookread(String bookreadData);
    BookreadEntity updateBookRead(String bookreadData, long userId, long bookreadId);
*/
}
