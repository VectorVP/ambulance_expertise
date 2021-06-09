import React from 'react'
import classes from './Menu.module.scss'

import { LinkContainer } from 'react-router-bootstrap'


const Menu = ({match}) => {

    const links = []

    return (
        <div className={classes.menu}>
            <h2 style={{marginBottom:'20px'}}> Menu </h2>
            
                <div>
                     <div>   
                        <LinkContainer to="/">
                            <p className={classes.link}>Home</p>
                        </LinkContainer>
                    </div>
                    <div>   
                        <LinkContainer to="/doctors">
                            <p className={classes.link}>Doctors</p>
                        </LinkContainer>
                    </div>
                    <div>
                        <LinkContainer to="/messenger">
                            <p className={classes.link}>Messenger</p>
                        </LinkContainer>
                    </div>
                    <div>
                        <LinkContainer to="/monitoring">
                            <p className={classes.link}>Monitoring</p>
                        </LinkContainer>
                    </div>
                    <div>
                        <LinkContainer to="/connection">
                            <p className={classes.link}>Connection</p>
                        </LinkContainer>
                    </div>
                </div>  
            
        </div>
    )
}

export default Menu
