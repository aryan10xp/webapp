import "./leftBar.scss"
import Profile from "../../assets/user.png"
import Messages from "../../assets/email.png"
import Forum from "../../assets/internet.png"
import Create from "../../assets/folder.png"
import Logout from "../../assets/shutdown.png"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import { Link } from "react-router-dom"
function LeftBar() {

 const { currentUser } = useContext(AuthContext);

  return (
    <div className='leftBar'>
        <div className="container">
            <div className="menu">
                <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUrNEG4HZBluFF4ucD8CYMV5y0HR5yvKhFw&usqp=CAU" alt="" />
                <span>{currentUser.name}</span>
                </div>
                <div className="item">
                    <Link to ="/profile/1" style={{textDecoration:"none",color:"inherit"}}>
                    <img width="10%" src={Profile} alt=""/>
                    <span>Profile</span>
                    </Link>
                </div>
                <div className="item">
                    <img width="10%" src={Messages} alt=""/>
                    <span>Messages</span>
                </div>
                <div className="item">
                <Link to ="/forum" style={{textDecoration:"none",color:"inherit"}}>
                    <img width="10%" src={Forum} alt=""/>
                    <span>Forum</span>
                </Link>
                </div>
                <div className="item">
                    <Link to ="/share" style={{textDecoration:"none",color:"inherit"}}>
                    <img width="10%" src={Create} alt=""/>
                    <span>Share</span>
                    </Link>
                </div>
                <div className="item">
                    <img width="10%" src={Logout} alt=""/>
                    <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>
                    <span>Logout</span>
                    </Link>
                </div>

            </div>

        </div>
    </div>
  )
}

export default LeftBar
