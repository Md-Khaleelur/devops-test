package com.zemoso.bookreadapp.bookmanagementservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Set;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "fieldHandler"})
public class Author {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @Size(min = 1, message = "is required")
    private String name;

    @Column
    private String profilePicture;

    @Column
    private Integer totalFollowers;

    @JsonIgnore
    @OneToMany(mappedBy="author", cascade = CascadeType.REMOVE, fetch = FetchType.EAGER)
    private Set<Book> books;
}
