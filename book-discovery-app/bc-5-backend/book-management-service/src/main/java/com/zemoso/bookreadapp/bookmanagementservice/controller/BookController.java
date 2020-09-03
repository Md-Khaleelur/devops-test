package com.zemoso.bookreadapp.bookmanagementservice.controller;

import com.zemoso.bookreadapp.bookmanagementservice.dto.BookDTO;
import com.zemoso.bookreadapp.bookmanagementservice.dto.BookResultDTO;
import com.zemoso.bookreadapp.bookmanagementservice.entity.Book;
import com.zemoso.bookreadapp.bookmanagementservice.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping("/")
@CrossOrigin
public class BookController {

    private final BookService bookService;

    @Autowired
    private final ModelMapper modelMapper;

    public BookController(BookService bookService, ModelMapper modelMapper) {
        this.bookService = bookService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(value = "/books", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Book>> getAllBooks(){
        List<Book> books;

        books = bookService.getBooks();
        log.info(String.valueOf(books));

        return ResponseEntity.ok().body(books);
    }

    @GetMapping(value = "/books/{bookId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Book> getBookById(@PathVariable("bookId") int bookId){
        Book book;
        book = bookService.getBookById(bookId);
        log.info(String.valueOf(book));

        return ResponseEntity.ok().body(book);
    }

    @GetMapping(value = "/search")
    public ResponseEntity<List<BookResultDTO>> search(@RequestParam(value = "keyword") String keyword, @RequestParam(value = "limit") Optional<String> limit, @RequestParam(value = "from") Optional<String> from){
        List<BookResultDTO> bookList;

        bookList = bookService.search(keyword, Integer.parseInt(limit.orElseGet(() -> "8")), Integer.parseInt(from.orElseGet(() -> "0")));

        return ResponseEntity.ok().body(bookList);
    }


    @PostMapping(value = "/books", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Book> saveBook(@RequestBody BookDTO bookDTO) {
        Book book = convertToEntity(bookDTO);

        log.debug("Received request to save book");
        Book savedBook = bookService.saveBook(book);

        return ResponseEntity.ok().body(savedBook);
    }

    @PutMapping(value = "/books/{bookId}", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Book> updateBook(@RequestBody BookDTO bookDTO, @PathVariable("bookId") int bookId){
        Book book = convertToEntity(bookDTO);
        log.debug("Received request to update book");
        Book updatedBook = bookService.updateBook(book, bookId);
        return ResponseEntity.ok().body(updatedBook);
    }

    private Book convertToEntity(BookDTO bookDTO){
        log.info("BookDTO {}",bookDTO);
        Book book = modelMapper.map(bookDTO, Book.class);

        log.info("Book {}", String.valueOf(book));
        return book;
    }

}
