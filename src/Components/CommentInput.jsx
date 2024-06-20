import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import { useState } from "react";
import { Alert } from "@mui/material";


export default function CommentInput({ onCommentSubmit }) {
  const [newComment, setNewComment] = useState("");

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };
  const [isPosted, setIsPosted] = useState(false);

  const handleSubmit = () => {
    onCommentSubmit(newComment);
    setIsPosted(true);
    setNewComment("");
  };
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
      }}
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Add a comment"
          type="text"
          value={newComment}
          onChange={handleChange}
          placeholder="Add a comment"
        />
        <Button Button variant="contained" onClick={handleSubmit}>
          Comment
        </Button>
        {isPosted ? (
          <p>
            <Alert severity="success">
              You have succesfully contributed your vote to this article
            </Alert>
          </p>
        ) : null}
      </div>
    </Box>
  );
}
