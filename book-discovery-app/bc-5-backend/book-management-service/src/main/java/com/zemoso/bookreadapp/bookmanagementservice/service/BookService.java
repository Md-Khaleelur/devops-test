package com.zemoso.bookreadapp.bookmanagementservice.service;

import com.zemoso.bookreadapp.bookmanagementservice.dto.BookResultDTO;
import com.zemoso.bookreadapp.bookmanagementservice.entity.Book;

import java.util.List;

public interface BookService {
    List<Book> getBooks();

    List<BookResultDTO> search(String keyword, int limit, int from);

    Book getBookById(int bookId);

    Book saveBook(Book book);

    Book updateBook(Book book, int bookId);
}
