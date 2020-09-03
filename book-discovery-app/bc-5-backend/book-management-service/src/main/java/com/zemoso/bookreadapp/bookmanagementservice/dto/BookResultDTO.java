package com.zemoso.bookreadapp.bookmanagementservice.dto;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@NoArgsConstructor
@ToString
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class BookResultDTO {
    private Integer id;

    private String title;

    private String coverImage;

    private Long isbn;

    private String language;

    private String description;

    private String authorName;

    private String profilePicture;

    private String categoryName;

    private Float avgRating;

    private Float totalRating;

    private Integer totalReviews;
}
