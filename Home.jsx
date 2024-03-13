import Posts from "../../components/posts/Posts"
import Stories from "../../components/stories/Stories"
import "./home.scss"

function Home() {
  return (
    <div>
      <div className="home">
        <Stories/>
        
        <Posts/>
      </div>
    </div>
  )
}

export default Home
