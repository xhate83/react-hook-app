import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { UserProvider } from "./context/UserProvider";

import { NavBar } from "./NavBar";

export const MainApp = () => {
  return (
    <UserProvider>
        <NavBar/>
        <hr />
        <Routes>
            <Route path="/" element={ <HomePage/>} />
            <Route path="/login" element={ <LoginPage/>} />
            <Route path="/about" element={ <AboutPage/>} />

            {/* <Route path="/*" element={ <LoginPage/>} /> */}
            <Route path="/*" element={ <Navigate to="/about"/>} />
        </Routes>
    </UserProvider>
   
  )
}
