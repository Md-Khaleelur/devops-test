package com.zemoso.bookreadapp.bookmanagementservice.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookServiceErrorResponse {
    private int status;

    private String message;

    private long time;
}
