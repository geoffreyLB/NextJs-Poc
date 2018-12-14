import { Fragment, React } from "react";
import fetch from "isomorphic-unfetch";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

const Show = props => {
  const { classes } = props;

  return (
    <Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{show.reference}</Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

Show.getInitialProps = async function() {
  const res = await fetch("http://localhost:3030/v2/jobs/:id");
  const data = await res.json();
  return {
    shows: data.data
  };
};

Show.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Show);
