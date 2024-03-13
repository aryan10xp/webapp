import LeftBar from './components/leftBar/LeftBar';
import Navbar from "./components/navbar/Navbar";
import RightBar from "./components/rightBar/RightBar";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
}from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Share from "./pages/share/Share"
import "./style.scss"
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModecontext';
import { AuthContext } from './context/authContext';
import { QueryClient, QueryClientProvider} from 'react-query'
import Posts from './components/posts/Posts';

function App() {

  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  const queryClient = new QueryClient()

  console.log(darkMode)

  const Layout = () =>{
    return(
      <QueryClientProvider client={queryClient}>
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display : "flex"}}>
          <LeftBar/>
          <div  style={{flex:6}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
      </QueryClientProvider>
    )
  };

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }


  const router = createBrowserRouter([
    {
      path:"/",
      element:(<ProtectedRoute>
        <Layout/>
      </ProtectedRoute>),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        },
        {
          path:"/share",
          element:<Share/>
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]); 

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
