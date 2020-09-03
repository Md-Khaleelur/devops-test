package com.zemoso.bookreadapp.bookmanagementservice.service;

import com.zemoso.bookreadapp.bookmanagementservice.entity.UserBookshelf;
import com.zemoso.bookreadapp.bookmanagementservice.service.impl.UserBookshelfServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(JUnit4.class)
public class UserBookshelfServiceTest {

    private final UserBookshelfServiceImpl bookreadServiceImpl = mock(UserBookshelfServiceImpl.class);

    @Test
    public void testGetBookreadsByUserId() {
        List<UserBookshelf> list = new ArrayList<>();
        list.add(new UserBookshelf());
        when(bookreadServiceImpl.getBookshelfByUserId(1)).
                thenReturn(list);

        assertThat(bookreadServiceImpl.getBookshelfByUserId(1)).isEqualTo(list);
    }

    @Test
    public void testGetBookreadsByBookreadId() {
        UserBookshelf userBookshelf = new UserBookshelf();
        when(bookreadServiceImpl.getBookshelfByBookshelfId(1)).
                thenReturn(userBookshelf);

        assertThat(bookreadServiceImpl.getBookshelfByBookshelfId(1)).isEqualTo(userBookshelf);
    }

    @Test
    public void testSaveBookread() {
        UserBookshelf userBookshelf = new UserBookshelf();
        when(bookreadServiceImpl.saveBookshelf(userBookshelf)).
                thenReturn(userBookshelf);

        assertThat(bookreadServiceImpl.saveBookshelf(userBookshelf)).isEqualTo(userBookshelf);
    }

    @Test
    public void testUpdateBookRead() {
        UserBookshelf userBookshelf = new UserBookshelf();
        when(bookreadServiceImpl.updateBookshelf(userBookshelf, 1, 1)).
                thenReturn(userBookshelf);
        assertThat(bookreadServiceImpl.updateBookshelf(userBookshelf, 1, 1))
                .isEqualTo(userBookshelf);
    }
}