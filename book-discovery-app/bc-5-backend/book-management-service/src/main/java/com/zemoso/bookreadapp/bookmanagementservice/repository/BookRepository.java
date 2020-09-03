package com.zemoso.bookreadapp.bookmanagementservice.repository;

import com.zemoso.bookreadapp.bookmanagementservice.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

}
