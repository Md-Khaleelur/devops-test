import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import IconButton from "@material-ui/core/IconButton";
import React, { useEffect, useState } from "react";

export default function DropDownButton(props) {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleFetch = (event) => {
    if (props.bookShelf) {
      const requestBody = {
        id: props.bookShelf.id,
        book : 
        {
          id: props.bookId,
        },
        user:{
          id: 1
        },
        readStatus: event.target.id,
      };
      props.putBookShelf(
        1,
        props.bookShelf.id,
        requestBody
      );
    } else {
      const requestBody = {
        book : 
        {
          id: props.bookId,
        },
        user:{
          id: 1
        },
        readStatus: event.target.id,
        pagesRead: 323,
      };
      props.postBookShelf(
        1,
        requestBody
      );
    }
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const prevOpen = React.useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div
      style={{
        height: "32px",
        width: "32px",
        backgroundColor: "#1665d8",
        borderRadius: "4px",
        boxShadow:
          "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
      }}
    >
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        style={{ height: "32px", width: "32px", padding: 0 }}
        variant="contained"
        size="small"
      >
        {
          <ArrowDropDown
            size="small"
            style={{ fill: "white", height: "32px", width: "28px", padding: 0 }}
          />
        }
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem
                    id="TO_READ"
                    onClick={(event) => {
                      handleClose(event);
                      handleFetch(event);
                    }}
                  >
                    Want to read
                  </MenuItem>
                  <MenuItem
                    id="READING"
                    onClick={(event) => {
                      handleClose(event);
                      handleFetch(event);
                    }}
                  >
                    Currently reading
                  </MenuItem>
                  <MenuItem
                    id="READ"
                    onClick={(event) => {
                      handleClose(event);
                      handleFetch(event);
                    }}
                  >
                    Finished reading
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
