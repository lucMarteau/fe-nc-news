import React from "react";
import "./CommentCard.css";
import { patchArticleVotes } from "../Utilities/api"; 
import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function CommentCard({ comment, article_id }) {
  const [votes, setVotes] = useState(comment.votes);
  const [error, setError] = useState(null);
  const [undo, setUndo] = useState(false);

  const handleUndo = () => {
    setVotes((currentVotes) => currentVotes - 1);
    patchArticleVotes(article_id, -1).catch((error) => {
      setVotes((currentVotes) => currentVotes + 1);
      setError("An error occured when trying to undo");
    });
    setUndo(false);
  };

  const handleClick = () => {
    setVotes((currentVotes) => currentVotes + 1);
    patchArticleVotes(article_id, 1).catch((error) => {
      setVotes((currentVotes) => currentVotes - 1);
      setError(
        "An error has occured when trying to contact the server to upload your vote"
      );
    });
    setUndo(true);
  };

  return (
    <div className="comment-card">
      <p>User name: {comment.author}</p>
      <p>{comment.body}</p>
      <button className="comment-button">Comment</button>
      <button className="vote-button" onClick={handleClick}>
        Vote
      </button>
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
            You have succesfully contributed your vote to this article
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