import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import SaveIcon from "@material-ui/icons/Save";

import { FormControl, InputLabel, Input, FormGroup } from "@material-ui/core";

import axiosWithAuth from "../../utils/axiosWithAuth";

import { AddBookStyles } from "../MaterialUIStyles/AddBookStyles";

function AddBook() {
  const classes = AddBookStyles();

  return (
    <form className={classes.addBook} noValidate autoComplete="off">
      <FormGroup>
        <TextField id="outlined-basic" label="Book Name" variant="outlined" />
        <Autocomplete
          id="author"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose an Author"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          id="author"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a Translator"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          id="author"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a Category"
              variant="outlined"
            />
          )}
        />
        <Autocomplete
          id="author"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a Language"
              variant="outlined"
            />
          )}
        />
      </FormGroup>

      <FormGroup className={classes.uploadButtons}>
        <FormControl>
          {/* <Input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          /> */}
          <InputLabel
            className={classes.inputLabel}
            htmlFor="contained-button-file"
          >
            <Button variant="contained" color="primary" component="span">
              Upload Book
            </Button>
          </InputLabel>
        </FormControl>
        <FormControl>
          {/* <Input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          /> */}

          <InputLabel
            className={classes.inputLabel}
            htmlFor="contained-button-file"
          >
            <Button variant="contained" color="primary" component="span">
              Upload Book
            </Button>
          </InputLabel>

          {/* <InputLabel htmlFor="icon-button-file">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera className={classes.icon} />
              Upload Photo
            </IconButton>
          </InputLabel> */}
        </FormControl>
      </FormGroup>

      <FormGroup>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </FormControl>
      </FormGroup>
    </form>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];
export default AddBook;
