package com.zemoso.bookreadapp.bookmanagementservice.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.bookreadapp.bookmanagementservice.entity.Book;
import com.zemoso.bookreadapp.bookmanagementservice.repository.BookRepository;
import com.zemoso.bookreadapp.bookmanagementservice.service.impl.BookServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.client.RestHighLevelClient;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.mockito.Mock;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

@RunWith(JUnit4.class)
@Slf4j
public class BookServiceImplMockTest {
    private final BookRepository bookRepository = mock(BookRepository.class);

    @Mock
    private final RestHighLevelClient client = mock(RestHighLevelClient.class);

    private final ObjectMapper objectMapper = mock(ObjectMapper.class);

    private BookService bookService;
    @Before
    public void init() {
        bookService = new BookServiceImpl(bookRepository, client, objectMapper);

    }

    @Test
    public void testGetBooks() {
        List<Book> books = new ArrayList<>();
        books.add(new Book());
        books.add(new Book());
        books.add(new Book());

        when(bookRepository.findAll()).thenReturn(books);

        List<Book> resultBooks = bookService.getBooks();

        verify(bookRepository).findAll();
        Assert.assertEquals(3, resultBooks.size());
    }

    @Test
    public void testGetBooks2() {
        List<Book> books = new ArrayList<>();
        Book book = new Book();
        book.setId(1);
        books.add(book);
        books.add(new Book());
        books.add(new Book());

        when(bookRepository.findAll()).thenReturn(books);

        List<Book> resultBooks = bookService.getBooks();

        verify(bookRepository).findAll();
        Assert.assertEquals(3, resultBooks.size());
        Assert.assertEquals(1, (long) resultBooks.get(0).getId());
    }

    @Test
    public void testGetBookById(){
        Book book = new Book();
        book.setId(1);

        when(bookRepository.findById(1)).thenReturn(java.util.Optional.of(book));

        Book resultBook = bookService.getBookById(1);

        Assert.assertEquals(1, (long)resultBook.getId());
    }

    @Test
    public void testSaveBook(){
        Book book = new Book();
        book.setId(1);

        when(bookRepository.save(any())).thenReturn(book);

        Book resultBook = bookService.saveBook(new Book());
        verify(bookRepository).save(any());
        Assert.assertEquals(1, (long)resultBook.getId());
    }

    @Test
    public void testUpdateBook(){
        Book book = new Book();
        book.setId(1);

        when(bookRepository.findById(1)).thenReturn(java.util.Optional.of(book));
        when(bookRepository.save(any())).thenReturn(book);

        Book resultBook = bookService.updateBook(new Book(), 1);
        verify(bookRepository).save(any());
        Assert.assertEquals(1, (long) resultBook.getId());
    }
}