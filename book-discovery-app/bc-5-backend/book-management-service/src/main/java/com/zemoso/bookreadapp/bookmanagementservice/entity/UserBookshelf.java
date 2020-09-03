package com.zemoso.bookreadapp.bookmanagementservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "fieldHandler"})
public class UserBookshelf {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn
    private User user;

    @ManyToOne(optional = false)
    @JoinColumn
    private Book book;

    @Column
    @Size(min = 1, message = "is required")
    private String readStatus;

    @Column(name = "pages_read")
    @Size(min = 1, message = "is required")
    private Integer pagesRead;

}
