package com.zemoso.bookreadapp.bookmanagementservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler", "fieldHandler"})
public class User {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true)
    private String name;

    @Column
    @Size(min = 1, message = "is required")
    private String email;

    @Column
    @Size(min = 1, message = "is required")
    private String phone;

    @Column
    @Size(min = 1, message = "is required")
    private String education;

    @Column
    @Size(min = 1, message = "is required")
    private String university;
}
