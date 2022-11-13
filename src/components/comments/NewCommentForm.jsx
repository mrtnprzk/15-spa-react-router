import { useEffect, useRef } from "react";

import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = ({ onAddedComment, quoteId }) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredText = commentTextRef.current.value;

    // optional: Could validate here

    // send comment to server

    sendRequest({ commentData: { text: enteredText }, quoteId });
  };

  useEffect(() => {
    if (status === "completed" && !error) {
      onAddedComment();
    }
  }, [status, error, onAddedComment]);

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" ? (
        <div className="centered">
          <LoadingSpinner />
        </div>
      ) : null}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button type="submit" className="btn">
          Add Comment
        </button>
      </div>
    </form>
  );
};

export default NewCommentForm;
