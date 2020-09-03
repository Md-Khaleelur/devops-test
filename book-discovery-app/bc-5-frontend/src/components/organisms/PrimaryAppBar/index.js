import { AppBar, Divider, Grid, Toolbar, Typography } from '@material-ui/core'
import { common } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
import ArrowDownIcon from '@material-ui/icons/ArrowDropDown'
import NotificationIcon from '@material-ui/icons/NotificationsOutlined'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AppLogo from '../../../assets/logo.png'
import { appBarTextColor } from '../../../utils/colorPallete'
import CustomAvatar from '../../atoms/CustomAvatar'
import NotificationBadge from '../../atoms/NotificationBadge'
import PrimaryButton from '../../molecules/PrimaryButton'
import SearchBar from '../../molecules/SearchBar'


const useStyles = makeStyles((theme) => ({
  grow: {
    maxHeight: "100px",
    zIndex: '10',
    top: 0,
    position: 'sticky'
  },
  appBar: {
    backgroundColor: common.white,
    color: appBarTextColor
  },
  pageTitle: {
    // margin: '0 24px 0 18px',
    display: 'flex'
  },
  divider: {
    height: '30px',
    width: '1px'
  },
  home: {
    // marginRight: '24px',
    fontSize: '14px',

    '&.hover': {
      color: 'blue',
      cursor: 'pointer'
    }
  },
  dropDownButton: {
    backgroundColor: common.white,
    borderColor: 'currentColor',
    padding: '6px 8px',
    fontSize: '14px',
    textTransform: 'capitalize',
    marginRight: '24px'
  },
  selectedButton: {
    backgroundColor: common.white,
    color: theme.palette.primary.main,
    borderColor: 'currentColor',
    padding: '6px 8px',
    fontSize: '14px',
    textTransform: 'capitalize',
    marginRight: '24px'
  },
  buttonText: {
    fontSize: '14px'
  }


}));

const buttons = {
  home: 'home',
  explore: 'explore',
  library: 'library'
}

const avatarUrl = 'https://robohash.org/30b1ef7c9ce11c1658169989c1c8c7a6?set=set4&bgset=&size=400x400'

const searchbarPlaceHolderText = 'Search here by book title, author or ISBN';


export default function PrimaryAppBar(props) {
  const [isSelected, setSelected] = useState(buttons.home)
  const [notificationCount, setNotificationCount] = useState()
  const [searchValue, setSearchValue] = useState("")

  function handleInputChange(event) {
    event.preventDefault()
    setSearchValue(event.target.value)
  }

  function handleCloseIconClick(event) {
    event.preventDefault()
    setSearchValue("")
  }

  function handleHomeButtonClick(event) {
    event.preventDefault();
    
    setSelected(buttons.home)
  }

  function handleExploreClick(event) {
    event.preventDefault();
    
    setSelected(buttons.explore)
  }

  function handleLibraryClick(event) {
    event.preventDefault();
    
    setSelected(buttons.library)
  }

  function hanleOnNotificationClick() {
    setNotificationCount(null)
  }

  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position='sticky'>
        <Toolbar>
          <Grid container direction='row' justify='space-between' alignItems='center'>
            <Grid item container direction='row' justify='flex-start' spacing={4} alignItems='center' xs={6}>
              <Grid item>
                <img src={AppLogo}></img>
              </Grid>
              <Grid item>
                <Typography className={classes.pageTitle} variant="body1" color="inherit">
                  Z - Athena
                    </Typography>
              </Grid>
              <Grid item>
                <Divider className={classes.divider} orientation='vertical' flexItem />
              </Grid>
              <Grid item>
                <PrimaryButton
                  onClick={(event) => handleHomeButtonClick(event)}
                  disableRipple
                >
                  <Link to='/home' style={{textDecoration:'none'}}>
                    <Typography variant='body2' color={isSelected === buttons.home ? 'primary' : 'initial'}>
                      Home
                    </Typography>
                  </Link>
                </PrimaryButton>
              </Grid>
              <Grid item>
                <PrimaryButton
                  onClick={(event) => handleExploreClick(event)}
                  endIcon={<ArrowDownIcon color={isSelected === buttons.explore ? 'primary' : 'action'} />}
                  disableRipple
                >
                  <Typography variant='body2' color={isSelected === buttons.explore ? 'primary' : 'initial'}>
                    Explore
                    </Typography>
                </PrimaryButton>
              </Grid>
              <Grid item>
                <PrimaryButton
                  onClick={(event) => handleLibraryClick(event)}
                  endIcon={<ArrowDownIcon color={isSelected === buttons.library ? 'primary' : 'action'} />}
                  disableRipple
                >
                  <Typography variant='body2' color={isSelected === buttons.library ? 'primary' : 'initial'}>
                    My library
                    </Typography>
                </PrimaryButton>
              </Grid>
            </Grid>
            <Grid item container direction='row' justify='flex-end' spacing={4} alignItems='center' xs={6} style={{ paddingRight: '20px' }}>
              <Grid item xs={6} style={{ margin: '16px' }}>
                <SearchBar hint={searchbarPlaceHolderText}
                  handleInputChange={handleInputChange}
                  handleCloseIconClick={handleCloseIconClick}
                  searchValue={searchValue} />
              </Grid>
              <Grid item>
                <NotificationBadge
                  label="notifications"
                  notificationCount={notificationCount}
                  handleOnClick={hanleOnNotificationClick}>
                  <NotificationIcon />
                </NotificationBadge>
              </Grid>
              <Grid item>
                <CustomAvatar avatarUrl={props.avatarUrl} handleClick={props.handleUser}/>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div >
  )
}