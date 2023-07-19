import { createBrowserRouter, redirect } from "react-router-dom";
// import App from "../App";
import Root from "../layout";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

import StudentRegistration from "../pages/StudentRegistration/StudentRegistration";


//import Home from "../pages/Home/Home";



/* const checkLogin =() => {
  if(!localStorage.getItem('token')) return redirect('/')
  else return null
}
const checkauth =() => {
  if(localStorage.getItem('token')) return redirect('/')
  else return null
} */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/profilepage", element: <ProfilePage /> },
      { path: "/newstudent", element: <StudentRegistration /> },
    ],
  },
 /*  {
    path: "/login",
    element: <LoginPage />
  } */
]);

export default router