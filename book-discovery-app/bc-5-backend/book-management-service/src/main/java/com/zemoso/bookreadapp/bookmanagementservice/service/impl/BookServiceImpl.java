package com.zemoso.bookreadapp.bookmanagementservice.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zemoso.bookreadapp.bookmanagementservice.dto.BookResultDTO;
import com.zemoso.bookreadapp.bookmanagementservice.entity.Book;
import com.zemoso.bookreadapp.bookmanagementservice.exception.BookNotFoundException;
import com.zemoso.bookreadapp.bookmanagementservice.repository.BookRepository;
import com.zemoso.bookreadapp.bookmanagementservice.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.QueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static com.zemoso.bookreadapp.bookmanagementservice.util.Constant.INDEX;

@Slf4j
@Service
public class BookServiceImpl implements BookService {
    private final BookRepository bookRepository;

    private final RestHighLevelClient client;

    private final ObjectMapper objectMapper;

    public BookServiceImpl(BookRepository bookRepository, RestHighLevelClient client, ObjectMapper objectMapper) {
        this.bookRepository = bookRepository;
        this.client = client;
        this.objectMapper = objectMapper;
    }

    @Override
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @Override
    public List<BookResultDTO> search(String keyword, int limit, int from) {
            SearchRequest searchRequest = new SearchRequest();
            searchRequest.indices(INDEX);
            SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
            String[] includeFields = new String[]{"id", "title", "cover_image", "isbn", "language", "description", "author_name", "profile_picture", "category_name", "avg_rating", "total_rating", "total_reviews"};
            String[] excludeFields = new String[]{};
            searchSourceBuilder.fetchSource(includeFields, excludeFields);
            QueryBuilder queryBuilder = QueryBuilders.queryStringQuery(keyword);
            searchSourceBuilder.query(queryBuilder).from(from).size(limit);

            searchRequest.source(searchSourceBuilder);
            SearchResponse response;
            try {
                log.info("client{}",client);
                response = client.search(searchRequest, RequestOptions.DEFAULT);
            }
            catch(IOException exception){
                log.error("Error occurred while performing search on elastic search {}", searchRequest);
                response = null;
            }
            return getSearchResult(response);
    }

    @Override
    public Book saveBook(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Book updateBook(Book book, int bookId) {
        Book currentBook = bookRepository.findById(bookId).orElseThrow(() -> new BookNotFoundException(bookId));
        Book newBook = copyProperties(currentBook, book);
        newBook.setId(bookId);
        return bookRepository.save(newBook);
    }

    private Book copyProperties(Book currentBook, Book book) {
        if(book.getAuthor() != null) currentBook.setAuthor(book.getAuthor());
        if(book.getCategory() != null) currentBook.setCategory(book.getCategory());
        if(book.getCoverImage() != null) currentBook.setCoverImage(book.getCoverImage());
        if(book.getDescription() != null) currentBook.setDescription(book.getDescription());
        if(book.getIsbn() != null) currentBook.setIsbn(book.getIsbn());
        if(book.getLanguage() != null) currentBook.setLanguage(book.getLanguage());
        if(book.getTitle() != null) currentBook.setTitle(book.getTitle());
        return currentBook;
    }

    @Override
    public Book getBookById(int bookId) {
        return bookRepository.findById(bookId)
                .orElseThrow(() -> new BookNotFoundException(bookId));
    }

    private List<BookResultDTO> getSearchResult(SearchResponse response) {

        if(response == null){
            return new ArrayList<>();
        }

        SearchHit[] searchHit = response.getHits().getHits();

        List<BookResultDTO> books = new ArrayList<>();


        for (SearchHit hit : searchHit){
            books.add(objectMapper.convertValue(hit.getSourceAsMap(), BookResultDTO.class));

        }
        return books;
    }
}

