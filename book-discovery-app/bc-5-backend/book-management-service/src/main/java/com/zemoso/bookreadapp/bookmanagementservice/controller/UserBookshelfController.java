package com.zemoso.bookreadapp.bookmanagementservice.controller;

import com.zemoso.bookreadapp.bookmanagementservice.dto.UserBookshelfDTO;
import com.zemoso.bookreadapp.bookmanagementservice.entity.UserBookshelf;
import com.zemoso.bookreadapp.bookmanagementservice.service.UserBookshelfService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/users/{userId}")
@CrossOrigin
public class UserBookshelfController {
    private final UserBookshelfService userBookshelfService;

    public UserBookshelfController(UserBookshelfService userBookshelfService) {
        this.userBookshelfService = userBookshelfService;
    }

    @GetMapping("/bookshelf")
    public List<UserBookshelfDTO> getBookshelf(@PathVariable("userId") Integer userId) {
        log.debug("Received request for list all bookshelf for the user =" + userId);
        if (userId != null) {
            List<UserBookshelf> list = userBookshelfService.getBookshelfByUserId(userId);
            List<UserBookshelfDTO> listDTO = listDTO = new ArrayList<>();
            for (UserBookshelf userBookshelf : list) {
                listDTO.add(copyProperties(userBookshelf));
            }
            return listDTO;
        }
        return new ArrayList<>();
    }

    @GetMapping("/bookshelf/{bookshelfId}")
    public UserBookshelfDTO getBookshelfById(@PathVariable("bookshelfId") Integer bookshelfId) {
        log.debug("Request for bookshelf by bookshelfId =" + bookshelfId);
        if (bookshelfId != null) {
            UserBookshelf userBookshelf = userBookshelfService.getBookshelfByBookshelfId(bookshelfId);
            return copyProperties(userBookshelf);
        }
        return new UserBookshelfDTO();
    }

    @PostMapping("/bookshelf")
    public UserBookshelfDTO saveBookshelf(@RequestBody UserBookshelfDTO userBookshelfDTO) {
        log.debug("Received request to save bookshelf, with data = " + userBookshelfDTO);
        if (userBookshelfDTO != null) {
            UserBookshelf userBookshelf = copyProperties(userBookshelfDTO);
            userBookshelf = userBookshelfService.saveBookshelf(userBookshelf);
            return copyProperties(userBookshelf);
        }
        return new UserBookshelfDTO();
    }

    @PutMapping("/bookshelf/{bookshelfId}")
    public UserBookshelfDTO updateBookreads(@RequestBody UserBookshelfDTO userBookshelfDTO,
                                            @PathVariable("userId") int userId,
                                            @PathVariable("bookshelfId") int bookshelfId) {
        log.debug("Received request to update bookshelf for userId =" + userId + " with bookshelfId =" + bookshelfId);
        if (userBookshelfDTO != null) {
            UserBookshelf userBookshelf = copyProperties(userBookshelfDTO);
            userBookshelf = userBookshelfService.updateBookshelf(
                    userBookshelf, userId, bookshelfId);
            return copyProperties(userBookshelf);
        }
        return new UserBookshelfDTO();
    }

    @GetMapping("/books/{bookId}")
    public List<UserBookshelfDTO> getBookshelfByUserIdAndBookId(@PathVariable("userId") Integer userId,
                                                                @PathVariable("bookId") Integer bookId) {
        log.debug("Request list all bookshelf for the user =" + userId + " and book = " + bookId);
        if (userId != null && bookId != null) {
            List<UserBookshelf> list = userBookshelfService.getBookshelfByUserIdAndBookId(userId, bookId);
            List<UserBookshelfDTO> listDTO = new ArrayList<>();
            for (UserBookshelf userBookshelf : list) {
                listDTO.add(copyProperties(userBookshelf));
            }
            return listDTO;
        }
        return new ArrayList<>();
    }

    @DeleteMapping("/bookshelf/{bookshelfId}")
    public void deleteBookshelfByBookshelfId(@PathVariable("bookshelfId") Integer bookshelfId) {
        log.debug("Request to delete userbookshelf, bookshelfId = " + bookshelfId);
        if (bookshelfId != null) {
            userBookshelfService.deleteBookshelfById(bookshelfId);
        }
    }

    @DeleteMapping("/bookshelf")
    public Long deleteAllBookshelfByUserId(@PathVariable("userId") Integer userId) {
        log.debug("Request to delete all userbookshelf, userId =" + userId);
        if (userId != null) {
            return userBookshelfService.deleteBookshelfByUserId(userId);
        }
        return 0l;
    }

    private UserBookshelfDTO copyProperties(UserBookshelf userBookshelf) {
        UserBookshelfDTO userBookshelfDTO = new UserBookshelfDTO();
        BeanUtils.copyProperties(userBookshelf, userBookshelfDTO);
        return userBookshelfDTO;
    }

    private UserBookshelf copyProperties(UserBookshelfDTO userBookshelfDTO) {
        UserBookshelf userBookshelf = new UserBookshelf();
        BeanUtils.copyProperties(userBookshelfDTO, userBookshelf);
        return userBookshelf;
    }
}
