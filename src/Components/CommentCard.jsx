import React from "react";
import "./CommentCard.css";

export default function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>User name: {comment.author}</p>
      <p>{comment.body}</p>
      <button className="comment-button">Comment</button>
      <button className="vote-button">Vote</button>
    </div>
  );
}