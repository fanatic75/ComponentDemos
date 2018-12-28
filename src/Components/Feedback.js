import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
const styles = theme => ({
  button: {
    position:"fixed",
    top:"40%",
    left:"-9vw",
    width:"23%",
    minWidth:"150px",
    transform:"rotateZ(90deg)",
  },
  
  
  
});
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },

  },
  typography: {
    useNextVariants: true,
  },
});

function Feedback(props) {
  const { classes } = props;
  return (
    <div>
     <MuiThemeProvider theme={theme}>
      <Button variant="extendedFab" color="primary"  aria-label="Feedback" className={classes.button}>
        
        FEEDBACK
      </Button>
      </MuiThemeProvider>
    </div>
  );
}

Feedback.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Feedback);
