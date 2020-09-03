package com.zemoso.bookreadapp.usermanagementservice.model;

public class BookreadEntity {
    private long bookreadId;

    public BookreadEntity(long bookreadId) {
        this.bookreadId = bookreadId;
    }

    public long getBookreadId() {
        return bookreadId;
    }

    public void setBookreadId(long bookreadId) {
        this.bookreadId = bookreadId;
    }
}
