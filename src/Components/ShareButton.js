import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import Share from '@material-ui/icons/Share';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,

  },



});
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#2196f3',
    },
  },
});

class ShareButton extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
    this.shareMenu=this.shareMenu.bind(this);
  }
  async  shareMenu () {
    try {
      console.log("it is going in try block");
      await navigator.share({ title: "Example Page", url: "" });
      console.log("Data was shared successfully");
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Button ref={this.buttonRef} variant="extendedFab" color="secondary" onClick={this.shareMenu} aria-label="Delete" className={classes.button}>
            <Share />
            Share
      </Button>
        </MuiThemeProvider>
      </div>
    );
  }

};

ShareButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShareButton);
