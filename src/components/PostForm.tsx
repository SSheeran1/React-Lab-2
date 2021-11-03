import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onSubmit: (post: Post) => void;
  setShowForm: (bool: boolean) => void;
}

const PostForm = ({ onSubmit, setShowForm }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const submissionHandler = (e: FormEvent): void => {
    e.preventDefault();
    setShowForm(false);
    onSubmit({ title, thought });
  };

  return (
    <form className="PostForm" onSubmit={submissionHandler}>
      <div className="form-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="thought">Thought</label>

        <input
          type="text"
          name="thought"
          id="thought"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
        />
        <button>Add Post</button>
      </div>
      <button onClick={() => setShowForm(false)}>X</button>
    </form>
  );
};

export default PostForm;
