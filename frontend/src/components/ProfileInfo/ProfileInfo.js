import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button'
import {LinkContainer} from 'react-router-bootstrap'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, userLogout } from '../../actions/userAction'

import classes from './Profile.module.scss'

const ProfileInfo = ({match, history}) => {

    const dispatch = useDispatch()

    const userLogin = useSelector( state => state.userLogin )
    const { userInfo } = userLogin

    useEffect( () => {

    }, [dispatch, userInfo])

    const Logout = () => {
        dispatch(userLogout())
    }

    return (
        userInfo ?    
            <div className={classes.profile}>
                <h2> Profile </h2>
                <Button variant="contained" color="primary" onClick={() => Logout()}> 
                    Logout
                </Button>
            </div> 
             : 
             <div className={classes.profile}>
                <h2> Profile </h2>
                <LinkContainer to={'/login'}>
                    <Button variant="contained" color="primary"> 
                        Login
                    </Button>
                </LinkContainer>
             </div>
    )
}

export default ProfileInfo
