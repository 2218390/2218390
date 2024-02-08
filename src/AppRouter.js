import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import App from "./App";
import Registration from "./components/Registration";
import Home from "./components/Home"
import Login from "./components/Login"
import Help from "./components/Help"
import Profile from "./components/Profile"

export default function AppRouter(){
  return (
  <Router>
    <Routes>
        <Route path={'/'} element={<App/>}>
          <Route index element={<Home />} />
          <Route path={'/register'} element={<Registration/>}/>
          <Route path={'/login'} element={<Login />}/>
          <Route path={'/help'} element={<Help />}/>
          <Route path={'/profile'} element={<Profile />}/>
        </Route>
      </Routes>
    </Router>
  )
}