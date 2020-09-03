package com.zemoso.bookreadapp.bookmanagementservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "fieldHandler"})
public class Book {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn
    private Category category;

    @ManyToOne
    @JoinColumn
    private Author author;

    @Column
    @Size(min = 1, message = "is required")
    private String title;

    @Column
    @Size(min = 1, message = "is required")
    private String coverImage;

    @Column
    @Size(min = 1, message = "is required")
    private Long isbn;

    @Column
    @Size(min = 1, message = "is required")
    private String language;

    @Column
    @Size(min = 1, message = "is required")
    private String description;

    @Column
    @Size(min = 1, message = "is required")
    private Double avgRating;

    @Column
    @Size(min = 1, message = "is required")
    private Double totalRating;

    @Column
    @Size(min = 1, message = "is required")
    private Integer totalReviews;
}
