package com.zemoso.bookreadapp.bookmanagementservice.service;


import com.zemoso.bookreadapp.bookmanagementservice.entity.UserBookshelf;

import java.util.List;

public interface UserBookshelfService {
    List<UserBookshelf> getBookshelfByUserId(Integer userId);

    UserBookshelf getBookshelfByBookshelfId(Integer bookshelfId);

    UserBookshelf saveBookshelf(UserBookshelf bookshelfData);

    List<UserBookshelf> getBookshelfByUserIdAndBookId(Integer userId, Integer bookId);

    UserBookshelf updateBookshelf(UserBookshelf bookshelfData, Integer userId, Integer bookshelfId);

    Long deleteBookshelfByUserId(Integer userId);

    void deleteBookshelfById(Integer bookshelfId);
}
