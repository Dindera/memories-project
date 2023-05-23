import React, { useState } from "react";
import { Button, Paper, TextField, Typography, styled } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import { createPost } from "../../actions/posts";

const Form = () => {
  const StyledTextField = styled(TextField)({
    width: "97%",
    margin: "10px 0",
  });
  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
  }));
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <StyledPaper>
      <form
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6"> Creating a Memory</Typography>
        <StyledTextField
          name="creator"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <StyledTextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <StyledTextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <StyledTextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          fullWidth
          sx={{ marginBottom: 2 }}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </StyledPaper>
  );
};

export default Form;
