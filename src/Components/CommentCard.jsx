import React from "react";
import "./CommentCard.css";
import { patchArticleVotes } from "../Utilities/api"; 
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { deleteArticleComment } from "../Utilities/api";


export default function CommentCard({ comment, article_id }) {
  const [votes, setVotes] = useState(comment.votes);
  const [error, setError] = useState(null);
  const [undo, setUndo] = useState(false);
  const [deleted, setDeleted] = useState(false)

 

  const handleClick = () => {
    setVotes((currentVotes) => currentVotes + 1);
    patchArticleVotes(article_id, 1)
    .catch((error) => {
      setVotes((currentVotes) => currentVotes - 1);
      setError(
        "An error has occured when trying to contact the server to upload your vote"
      );
    });
    setUndo(true);
  };
  
  const handleUndo = () => {
    setVotes((currentVotes) => currentVotes - 1);
    patchArticleVotes(article_id, -1)
    .catch((error) => {
      setVotes((currentVotes) => currentVotes + 1);
      setError(
        "An error occured when trying to undo"
      );
    });
    setUndo(false);
  };
  

  const handleCommentDelete = () => {
    setDeleted(true)
    deleteArticleComment(comment.comment_id)
    .catch((error) => {
      setDeleted(false)
      setError(
        "Something has gone wrong. Your comment has not been deleted"
      );
    });
  }

  if (deleted) return null;

  return (
    
    <div className="comment-card">
      
      <p>User name: {comment.author}</p>
      <p>{comment.body}</p>
      <p>
        {comment.author === "grumpy19" && (
      <Button variant="contained" color="error" onClick={handleCommentDelete}>Delete my comment</Button>
      )}
        </p>
      <Button variant="contained" className="vote-button" onClick={handleClick}>

        Like
      </Button>
      {undo && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert
            severity="success"
            action={
              <Button color="inherit" size="small" onClick={handleUndo}>
                UNDO
              </Button>
            }
          >
            You have succesfully liked this comment
          </Alert>
        </Stack>
      )}

      {error && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">{error}</Alert>
        </Stack>
      )}
      <p>Votes total: {votes}</p>
      
    </div>
  );
}