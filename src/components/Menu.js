import React from 'react'
import { Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';


const Home = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '160px'
        }}>
            <div className='menu-title'>
                <h1>Welcome to Foods Kitchen</h1>
            </div>
            <Link to="/menu">
                <Button
                    size="small"
                    color="primary"
                    style={{
                        color: "#fff",
                        backgroundColor: "#4040a7",
                        fontSize: '16px',
                        padding: '8px'
                    }}
                >Go TO MENU</Button>
            </Link>
        </div>
    )
}

export default Home;