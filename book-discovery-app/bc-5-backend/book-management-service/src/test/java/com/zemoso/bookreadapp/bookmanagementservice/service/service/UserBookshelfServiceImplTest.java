package com.zemoso.bookreadapp.bookmanagementservice.service.service;

import com.zemoso.bookreadapp.bookmanagementservice.entity.UserBookshelf;
import com.zemoso.bookreadapp.bookmanagementservice.repository.UserBookshelfRepository;
import com.zemoso.bookreadapp.bookmanagementservice.service.UserBookshelfService;
import com.zemoso.bookreadapp.bookmanagementservice.service.impl.UserBookshelfServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.mockito.Mockito;

import java.util.Collections;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(JUnit4.class)
public class UserBookshelfServiceImplTest {
    private final UserBookshelfRepository userBookshelfRepository = Mockito.mock(UserBookshelfRepository.class);
    private UserBookshelfService userBookshelfService;

    @Before
    public void init(){
        userBookshelfService =  new UserBookshelfServiceImpl(userBookshelfRepository);
        when(userBookshelfRepository.findByUserId(anyInt())).thenReturn(Collections.singletonList(new UserBookshelf()));
        when(userBookshelfRepository.getOne(anyInt())).thenReturn(new UserBookshelf());
        when(userBookshelfRepository.findByUserIdAndBookId(anyInt(), anyInt())).thenReturn(Collections.singletonList(new UserBookshelf()));
    }

    @Test
    public void testGetBookshelfByUserId(){
       List<UserBookshelf> testUserBookShelfList =  userBookshelfService.getBookshelfByUserId(1);
        Assert.assertNotNull(testUserBookShelfList);
        Assert.assertEquals(1,testUserBookShelfList.size());
    }

    @Test
    public void testUpdateBookshelf(){
        UserBookshelf testBookShelfData = new UserBookshelf();
        userBookshelfService.updateBookshelf(testBookShelfData,2,2);
        verify(userBookshelfRepository).save(any());
    }

    @Test
    public void testGetBookshelfByUserIdAndBookId(){
        List<UserBookshelf> testUserBookShelfList =  userBookshelfService.getBookshelfByUserIdAndBookId(1, 1);
        Assert.assertNotNull(testUserBookShelfList);
        Assert.assertEquals(1,testUserBookShelfList.size());
    }
}
