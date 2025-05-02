import React from 'react'
import NavBar from '../../layouts/NavBar/NavBar'
import Body from '../../layouts/Body/Body'

export const Home = () => {
    return (
        <div>
            <NavBar/>
            <div style={{height: "500px"}}></div>
            <Body/>
        </div>
    )
}
