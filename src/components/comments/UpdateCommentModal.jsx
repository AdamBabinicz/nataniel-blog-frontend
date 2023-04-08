import "./update-comment-modal.css";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../redux/apiCalls/commentApiCall";

const UpdateCommentModal = ({ setUpdateComment, commentForUpdate }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState(commentForUpdate?.text);

  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("Proszę coś napisać");

    dispatch(updateComment(commentForUpdate?._id, { text }));
    setUpdateComment(false);
  };

  return (
    <div className="update-comment">
      <ToastContainer theme="colored" />
      <form onSubmit={formSubmitHandler} className="update-comment-form">
        <abbr title="close">
          <i
            onClick={() => setUpdateComment(false)}
            className="bi bi-x-circle-fill update-comment-form-close"
          ></i>
        </abbr>
        <h2 className="update-comment-title">Edytuj komentarz</h2>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
          type="text"
          className="update-comment-input"
          placeholder="Update Comment"
        />
        <button type="submit" className="update-comment-btn">
          Edytuj komentarz
        </button>
      </form>
    </div>
  );
};

export default UpdateCommentModal;
