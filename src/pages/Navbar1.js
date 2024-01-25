


import React, { useState } from 'react'

import "./pages/Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';


import { Link } from 'react-router-dom'

export default function Navbar1({ setSearchTerm }) {

    let [value, setValue] = useState();
    let [display, setDisplay] = useState(true);

    // function GetData(e) {
    //     e.preventDefault();
    //     SetNews(e.target[0].value)
    //     console.log(e.target[0].value)
    // }

    const handleSearch = () => {
        setSearchTerm(value);
        // console.log(value)
    }
    return (
        <>
            <nav>

                {/* <h1>Welcome</h1> */}
                <img src='https://s3-prod.autonews.com/s3fs-public/Automotive-News-logo-1200x630.jpg' />

                <div className='searchbar'>
                    <input
                        type="search"
                        placeholder="Search..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />
                    <button id='Search' onClick={handleSearch}>Search</button>
                </div>
                <button id='Toggle' onClick={() => setDisplay(!display)}><MenuIcon/></button>
                {display ?
                    <ul id='Ul'>

                        <Link className='link' to="/news" >Home</Link>
                        <Link className='link' to="/Sports" >Sports</Link>
                        <Link className='link' to="/Politics" >Politics</Link>
                        <Link className='link' to="/Travel" >Travel</Link>

                    </ul>
                    : null}
            </nav>

        </>
    )
}



