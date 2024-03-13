import { useContext } from "react";
import "./comments.scss"
import {AuthContext} from "../../context/authContext"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)
    

    const comments = [
        {
          id: 1,
          desc: "This is my first project guys!!",
          name: "Aryan",
          userId: 1,
          profilePicture: "https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?b=1&s=612x612&w=0&k=20&c=PsQQpGXVtV9dPDaH-DNEgeMAHjqkViCSQsSrkqlHKRk="
    
      },
      {
          id: 2,
          desc:"This is my second project and I am feeling so happy! ",
          name: "Aryan",
          userId: 2,
          profilePicture:"https://images.pexels.com/photos/3970396/pexels-photo-3970396.jpeg?auto=compress&cs=tinysrgb&w=1600"
      },
      ];
  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt=""/>
            <input type="text" placeholder="write a comment"/>
            <button>Send</button>
        </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePicture} alt=""/>
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className="date">1 hour ago</span>
            </div>
        ))
    }
    </div>
  )
}

export default Comments
