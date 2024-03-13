import { useContext } from "react"
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    const stories = [
        {
            id: 1,
            name: "Aryan",
            img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 2,
            name: "Shourya",
            img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            id: 3,
            name: "Harshit",
            img: "https://media.istockphoto.com/id/516449022/photo/lady-with-kayak.jpg?b=1&s=612x612&w=0&k=20&c=PsQQpGXVtV9dPDaH-DNEgeMAHjqkViCSQsSrkqlHKRk="
        },
        {
            id: 4,
            name: "Dr.Deepa",
            img: "https://images.pexels.com/photos/2718571/pexels-photo-2718571.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ]
  return (
    <div className="stories">
        <div className="story">
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
                <button>+</button>
                <span>Add a story</span>
            </div>
        {stories.map(story =>(
            <div className="story" key={story.id}>
                <img src={story.img} alt=""/>
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories
