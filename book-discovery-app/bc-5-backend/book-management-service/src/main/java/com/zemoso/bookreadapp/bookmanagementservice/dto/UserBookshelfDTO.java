package com.zemoso.bookreadapp.bookmanagementservice.dto;

import com.zemoso.bookreadapp.bookmanagementservice.entity.Book;
import com.zemoso.bookreadapp.bookmanagementservice.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserBookshelfDTO {
    private Integer id;
    private User user;
    private Book book;
    private String readStatus;
    private Integer pagesRead;
}
