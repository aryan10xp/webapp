import "./navbar.scss"
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { DarkModeContext } from "../../context/darkModecontext";
import { Context } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);


  return (
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
            <span>Cowork.io</span>
            </Link>
            
            <HomeOutlinedIcon/>
            {darkMode ? <WbSunnyOutlinedIcon  onClick={toggle}/> : 
            <DarkModeOutlinedIcon onClick={toggle}/>}
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="search" placeholder="Search..."/>                
            </div>
        </div>
        <div className="right">
            <PersonOutlineOutlinedIcon/>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUrNEG4HZBluFF4ucD8CYMV5y0HR5yvKhFw&usqp=CAU" alt="" />
                <span>{currentUser.name}</span>
            </div>

        </div>
    </div>
  )
}

export default Navbar
