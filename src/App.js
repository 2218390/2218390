import "./App.css";
import {Link, Outlet} from "react-router-dom"
import React from "react"
import Header from "./components/Header"


export default function App() {
  
    return (
      <div className="App">
        <Header/>
        <nav className="App-nav">
          <Link className="nav-link1" to={'/'}>Home</Link>
          <Link className="nav-link1" to={'/register'}>Register</Link>
          <Link className="nav-link1" to={'/login'}>Login</Link>
          <Link className="nav-link1" to={'/help'}>Help</Link>
          <Link className="nav-link1" to={'/profile'}>Profile</Link>
        </nav>
        <main className="App-main">
          <Outlet/>
        </main>
      </div>
    );
}