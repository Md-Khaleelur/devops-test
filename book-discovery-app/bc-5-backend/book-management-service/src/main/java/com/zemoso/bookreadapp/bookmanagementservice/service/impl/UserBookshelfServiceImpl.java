package com.zemoso.bookreadapp.bookmanagementservice.service.impl;

import com.zemoso.bookreadapp.bookmanagementservice.entity.UserBookshelf;
import com.zemoso.bookreadapp.bookmanagementservice.repository.UserBookshelfRepository;
import com.zemoso.bookreadapp.bookmanagementservice.service.UserBookshelfService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserBookshelfServiceImpl implements UserBookshelfService {

    private final UserBookshelfRepository userBookshelfRepository;

    public UserBookshelfServiceImpl(UserBookshelfRepository userBookshelfRepository) {
        this.userBookshelfRepository = userBookshelfRepository;
    }

    @Override
    public List<UserBookshelf> getBookshelfByUserId(Integer userId) {
        return userBookshelfRepository.findByUserId(userId);
    }

    @Override
    public UserBookshelf getBookshelfByBookshelfId(Integer bookshelfId) {
        return userBookshelfRepository.getOne(bookshelfId);
    }

    @Override
    public UserBookshelf saveBookshelf(UserBookshelf bookshelfData) {
        return userBookshelfRepository.save(bookshelfData);
    }

    @Override
    public UserBookshelf updateBookshelf(UserBookshelf userBookshelfData, Integer userId, Integer bookshelfId) {
        UserBookshelf userBookshelf = userBookshelfRepository.getOne(bookshelfId);
        userBookshelf.setReadStatus(userBookshelfData.getReadStatus());
        userBookshelf.setPagesRead(userBookshelfData.getPagesRead());
        return userBookshelfRepository.save(userBookshelf);

    }

    @Override
    public List<UserBookshelf> getBookshelfByUserIdAndBookId(Integer userId, Integer bookId) {
        return userBookshelfRepository.findByUserIdAndBookId(userId, bookId);
    }

    @Override
    public Long deleteBookshelfByUserId(Integer userId) {
        return userBookshelfRepository.deleteByUserId(userId);
    }

    @Override
    public void deleteBookshelfById(Integer bookshelfId) {
        userBookshelfRepository.deleteById(bookshelfId);
    }
}
