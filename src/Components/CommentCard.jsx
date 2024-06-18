import React from "react";
import "./CommentCard.css";
import { patchArticleVotes } from "../Utilities/api"; 
import { useState } from "react";


export default function CommentCard({ comment, article_id }) {
  const [votes, setVotes] = useState(comment.votes)
  const [error, setError] = useState(null)


  const handleClick = () => {
    setVotes((currentVotes) => currentVotes + 1)
    patchArticleVotes(article_id, 1)
    .catch((error) => {

      setVotes((currentVotes) => currentVotes - 1)
      setError("...Error")
    })
  }

  return (
    <div className="comment-card">
      <p>User name: {comment.author}</p>
      <p>{comment.body}</p>
      <button className="comment-button">Comment</button>
      <button className="vote-button" onClick={handleClick}>Vote</button>
      <p>{votes} votes</p>
    </div>
  );
}