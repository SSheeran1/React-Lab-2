import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool.",
    },
    {
      title: "React",
      thought: "React gives me power!",
    },
    {
      title: "Beatrice",
      thought: "Beatrice has mad skills.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const deletePost = (index: number): void => {
    setPosts((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const addPost = (post: Post): void => {
    setPosts((prev) => [...prev, post]);
  };

  return (
    <div className="SocialPosts">
      <button onClick={() => setShowForm(true)}>New Thought</button>
      {showForm && <PostForm onSubmit={addPost} setShowForm={setShowForm} />}
      <div>
        <ul>
          {posts.map((post, i) => (
            <PostInList
              key={`${post.title}${i}`}
              post={post}
              index={i}
              onDelete={deletePost}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialPosts;
