import React from "react";
import { Link } from 'react-router-dom'

const Home = () => <><h1>HOME</h1>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/bmi">Bmi</Link></li>
            <li><Link to="/calc">Clac</Link></li>
            <li><Link to="/grade">Grade</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
</>
export default Home