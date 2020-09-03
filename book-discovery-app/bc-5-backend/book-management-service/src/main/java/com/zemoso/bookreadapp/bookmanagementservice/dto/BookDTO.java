package com.zemoso.bookreadapp.bookmanagementservice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class BookDTO {
    private Integer id;
    private Integer categoryId;
    private Integer authorId;
    private String title;
    private String coverImage;
    private Long isbn;
    private String language;
    private String description;
}
