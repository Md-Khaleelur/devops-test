package com.zemoso.bookreadapp.usermanagementservice.service;

import com.zemoso.bookreadapp.usermanagementservice.model.BookreadEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(MockitoJUnitRunner.class)
class BookreadServiceTest {
    @InjectMocks
    private BookreadService bookreadService;

    @Test
    public void whenFetchAll_thenReturnBookreadList() {
        List<String> expectedBookreads = Arrays.asList("bookread-1", "bookread-2");

        // when
        List<String> actualBookreads = bookreadService.getBookreadsByUserId(1);

        // then
        assertEquals(actualBookreads.toString(), expectedBookreads.toString());
    }

    @Test
    public void whenFetch_thenReturnBookread() {
        BookreadEntity expectedBR = new BookreadEntity(1);

        // when
        BookreadEntity actualBookreads = bookreadService.getBookreadsByBookreadId(1);

        // then
        assertEquals(actualBookreads.getBookreadId(), expectedBR.getBookreadId());
    }
}