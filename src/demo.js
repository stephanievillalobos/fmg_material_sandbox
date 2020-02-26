import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import { shadows } from "@material-ui/system";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    "& > * > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function Types() {
  const theme = createMuiTheme({
    // disabled: {
    //   opacity: 0
    // },
    palette: {
      primary: {
        main: "#3c97d8"
      },
      secondary: {
        main: "#4fb466"
      },
      action: {
        disabledBackground: "fff"
      }
    },
    overrides: {
      // Button does not have Elevation like paper does, only enabled and disabled ex - https://github.com/mui-org/material-ui/issues/16357
      MuiButton: {
        root: {
          padding: "8px 16px",
          lineHeight: "1.5",
          fontWeight: 700,
          fontFamily: "Montserrat, Arial"
          // boxShadow: "0px 3px 1px -2px rgba(0,0,0,1), 0px 2px 2px 0px rgba(0,0,0,1), 0px 1px 5px 0px rgba(0,0,0,1)",
        },
        contained: {
          backgroundColor: "#fff",
          borderColor: "#ccc",
          borderWidth: 1,
          borderStyle: "solid",
          boxShadow: "none",
          "&:hover, &:active, &:focus, &:active:hover": {
            boxShadow: "none"
          }
          // boxShadow: "0px 3px 1px -2px rgba(0,0,0,1), 0px 2px 2px 0px rgba(0,0,0,1), 0px 1px 5px 0px rgba(0,0,0,1)",
        },
        containedPrimary: {
          borderWidth: 0
        },
        containedSecondary: {
          color: "white",
          borderWidth: 0
        }
      },
      appBar: {}
    },
    typography: {
      color: "#333",
      fontWeight: 400,
      lineHeight: "1.5",
      fontSize: 14,
      fontFamily: "Muli",
      h1: {
        fontSize: 24,
        textTransform: "uppercase",
        fontFamily: "Montserrat, Arial",
        fontWeight: 700
      },
      h2: {
        fontSize: 20,
        fontFamily: "Montserrat, Arial",
        fontWeight: 700
      },
      h3: {
        fontSize: 18,
        fontFamily: "Montserrat, Arial",
        fontWeight: 700
      },
      h4: {
        fontSize: 16,
        fontFamily: "Montserrat, Arial",
        fontWeight: 700
      },
      body1: {}
    }
  });

  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" display="block" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" display="block" gutterBottom>
          overline text
        </Typography>
        <div>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
        <div>
          <Button variant="outline">Default</Button>
          <Button variant="outline" color="primary">
            Primary
          </Button>
          <Button variant="outline" color="secondary">
            Secondary
          </Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
          <Button variant="outline" color="primary" href="#contained-buttons">
            Link
          </Button>
        </div>
        <div>
          <Button variant="contained" color="primary" size="small">
            Small
          </Button>
          <Button variant="contained" color="primary" size="medium">
            Medium
          </Button>
          <Button variant="contained" color="primary" size="large">
            Large
          </Button>
        </div>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
      </div>
    </ThemeProvider>
  );
}
