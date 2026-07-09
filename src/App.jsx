import "./App.css";
import { useState } from "react";
import profile1 from "./assets/profile1.jpg";
import profile2 from "./assets/profile2.jpg";
import profile3 from "./assets/profile3.jpg";

import story1 from "./assets/story1.jpg";
import story2 from "./assets/story2.jpg";
import story3 from "./assets/story3.jpg";
import story4 from "./assets/story4.jpg";
import story5 from "./assets/story5.jpg";

import post1 from "./assets/post1.jpg";
import {
  FaHeart,
  FaComment,
  FaShare,
  FaBell,
  FaUserCircle,
  FaSearch
} from "react-icons/fa";

function App() {
  const [likes, setLikes] = useState(245);
  const [liked, setLiked] = useState(false);
  const [follow, setFollow] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState({
  sophia: false,
  alex: false,
  olivia: false,
});

  function createPost() {
    if (post.trim() !== "") {
      setPosts([post, ...posts]);
      setPost("");
    }
  }

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">SocialSphere</h2>

        <input
          type="text"
          placeholder="Search..."
          className="search-box"
        />

        <div className="nav-icons">
         <FaSearch />
         <FaBell />
         <FaUserCircle />
        </div>
      </nav>

      {/* Hero */}
      <div className="hero">
      
        <h1>Connect • Share • Inspire</h1>
        <p>Share your memories with friends around the world.</p>

        <button>Start Sharing</button>
      </div>

      {/* Stories */}
      <h2 className="story-title">Stories</h2>

      <div className="stories">
        <div className="story">
         <img src={story1} className="story-img" alt="Emma" />
          <p>Emma</p>
        </div>

        <div className="story">
          <img src={story2} className="story-img" alt="Alex" />
          <p>Alex</p>
        </div>

        <div className="story">
          <img src={story3} className="story-img" alt="Sophia" />
          <p>Sophia</p>
        </div>

        <div className="story">
          <img src={story4} className="story-img" alt="John" />
          <p>John</p>
        </div>

        <div className="story">
          <img src={story5} className="story-img" alt="Olivia" />
          <p>Olivia</p>
        </div>
      </div>

      {/* Create Post */}
      <div className="create-post">
        <h2>Create Post</h2>

        <textarea
          placeholder="What's on your mind?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <button onClick={createPost}>🚀 Post</button>
      </div>

      {/* User Posts */}
      {posts.map((item, index) => (
        <div className="user-post" key={index}>
          <h3>👤 You</h3>
          <p>{item}</p>
        </div>
      ))}

      {/* Feed */}
      <h2 className="feed-title">Latest Posts</h2>

      <div className="feed">
        <div className="post-card">

          <div className="post-header">
            <img
                src={profile1}
           className="profile-pic"
           alt="Emma Watson"
                          />

            <div>
              <h3>Emma Watson</h3>
              <p>2 hours ago</p>
            </div>
          </div>

          <img
  src={post1}
  className="post-image"
  alt="Post"
/>

          <div className="post-icons">

            <button
          className="like-btn"
                  onClick={() => {
             if (liked) {
               setLikes(likes - 1);
               } else {
                setLikes(likes + 1);
              }
                setLiked(!liked);
               }}
               >
                   <FaHeart />
               {liked ? " Unlike" : " Like"}
                   </button>

            <button className="comment-btn">
              <FaComment /> Comment
            </button>
            <button
  className="share-btn"
  onClick={() => setShareOpen(true)}
>
  <FaShare /> Share
</button>
          </div>

          <p className="likes">
            <FaHeart /> {likes} Likes
          </p>

          <p className="caption">
            Enjoying a beautiful evening with friends! 🌸✨
          </p>

          <button
            className="follow-btn"
            onClick={() => setFollow(!follow)}
          >
            {follow ? "✓ Following" : "+ Follow"}
          </button>

        </div>
      </div>

      {/* Suggested Friends */}
      <h2 className="friends-title">Suggested Friends</h2>

      <div className="friends">

        <div className="friend-card">
          <h3>👩 Sophia</h3>
          <p>UI/UX Designer</p>
           <button
  onClick={() =>
    setFriends({ ...friends, sophia: !friends.sophia })
  }
>
  {friends.sophia ? "✓ Added" : "Add Friend"}
</button>
        </div>

        <div className="friend-card">
          <h3>👨 Alex</h3>
          <p>Frontend Developer</p>
          <button
  onClick={() =>
    setFriends({ ...friends, alex: !friends.alex })
  }
>
  {friends.alex ? "✓ Added" : "Add Friend"}
</button>
        </div>

        <div className="friend-card">
          <h3>👩 Olivia</h3>
          <p>Photographer</p>
           <button
  onClick={() =>
    setFriends({ ...friends, olivia: !friends.olivia })
  }
>
  {friends.olivia ? "✓ Added" : "Add Friend"}
</button>
        </div>

      </div>
      {shareOpen && (

<div className="share-popup">

<div className="popup-box">

<h3>Share this Post</h3>

<button>📱 WhatsApp</button>

<button>📘 Facebook</button>

<button>📷 Instagram</button>

<button
onClick={() => setShareOpen(false)}
>
✖ Close
</button>

</div>

</div>

)}
      {/* Footer */}

<footer className="footer">

  <h3>SocialSphere</h3>

  <p>Connect • Share • Inspire 🌍</p>

  <p>© 2026 All Rights Reserved.</p>

</footer>

    </div>
  );
}

export default App;