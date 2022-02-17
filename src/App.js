import React from "react"
import { BrowserRouter as Router, Route, Routes, useRoutes } from 'react-router-dom'
import Bmi from "./components/Bmi";
import Calc from "./components/Calc";
import Grade from "./components/Grade";
import Home from "./pages/Home";
import Login from "./components/Login";

/*const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route expected path="/" element={<Home />} />
                    <Route path="/bmi" element={<Bmi />} />
                    <Route path="/calc" element={<Calc />} />
                    <Route path="/grade" element={<Grade />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    )
}*/


export default function App() {
    return useRoutes([
        { path: "/", element: < Home /> },
        { path: "/bmi", element: < Bmi /> },
        { path: "/calc", element: < Calc /> },
        { path: "/grade", element: < Grade /> },
        { path: "/login", element: < Login /> }
    ]);
}
