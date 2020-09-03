import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/utils/theme'
import PrimaryAppBar from '../src/components/organisms/PrimaryAppBar'
import HomeScreenPage from '../src/pages/HomeScreenPage'
import { getUserDetails } from '../src/service/UserManagementService'
import BookDetailPage from '../src/pages/BookDetailPage'
import MoreSearchPage from '../src/pages/MoreSearch/MoreSearch'
import { Switch, Route, Redirect } from 'react-router-dom'


function App() {

    const [userData, setUserData] = useState([])
    const [isNewUser, setIsNewUser] = useState(false)

    const getUserData = async () => {
        const userDetails = await getUserDetails()

        setUserData(userDetails)
    }

    useEffect(() => {
        getUserData()
    }, [])


    function handleUserChange() {
        console.log("click", isNewUser)
        setIsNewUser(!isNewUser)
    }


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <PrimaryAppBar userTarget={userData.target} handleUser={() => handleUserChange()}/>
            <Switch>
                <Route path='/home' render={() => <HomeScreenPage userTarget={userData.target} isNewUser={isNewUser}/>} />
                <Route path='/books/:id' exact component={BookDetailPage} />
                <Route path='/search/:keyword' exact component={MoreSearchPage} />
                <Redirect to="/home" render={() => <HomeScreenPage userTarget={userData.target} />} />
            </Switch>
        </ThemeProvider>
    )
}

export default App