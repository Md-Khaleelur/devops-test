package com.zemoso.bookreadapp.bookmanagementservice.repository;

import com.zemoso.bookreadapp.bookmanagementservice.entity.UserBookshelf;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface UserBookshelfRepository extends JpaRepository<UserBookshelf, Integer> {
    List<UserBookshelf> findByUserId(Integer userId);

    List<UserBookshelf> findByUserIdAndBookId(Integer userId, Integer bookId);

    Long deleteByUserId(Integer userId);
}
