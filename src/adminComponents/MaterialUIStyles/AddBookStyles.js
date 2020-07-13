import { makeStyles } from "@material-ui/core/styles";

export const AddBookStyles = makeStyles((theme) => ({
  addBook: {
    marginTop: "3rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: "5rem 5rem",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      maxWidth: "40rem",
      fontSize: "21rem",
      height: "50px",
    },
  },
  uploadButtons: {
    // justifySelf: "stretch",
    // alignSelf: "stretch",
    // width: "30rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    display: "none",
    // width: "100%",
  },
  inputLabel: {
    width: "200px",
  },
  icon: {
    width: "4rem",
    height: "4rem",
  },
  button: {
    marginTop: "2rem",
    fontSize: "2rem",
  },
}));
