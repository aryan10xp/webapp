import "./profile.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Posts from "../../components/posts/Posts";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.pexels.com/photos/3970396/pexels-photo-3970396.jpeg?auto=compress&cs=tinysrgb&w=1600" className="cover"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUrNEG4HZBluFF4ucD8CYMV5y0HR5yvKhFw&usqp=CAU" className="profilePic"/>
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.instagram.com">
              <InstagramIcon fontSize="large"/>
            </a>
            <a href="https://www.linkedin.com">
              <LinkedInIcon fontSize="large"/>
            </a>
            <a href="https://www.github0.com">
              <GitHubIcon fontSize="large"/>
            </a>
            <div className="bottomLeft">
            <span>Organization:</span>
            <span>Skills:</span>
            <span>Interests:</span>
          </div>
          </div>
          
          <div className="center">
            <span>Aryan</span>
            <div className="info">
              <div className="item">
              </div>
            </div>
            <button>Follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertIcon/>
          </div>
        </div>
        <Posts/>
      </div>
      
    </div>
  )
}

export default Profile
