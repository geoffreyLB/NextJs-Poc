import React, { Fragment } from "react";
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

const Show = ({ classes, jobs }) => {
  console.log(jobs);
  return (
    <Fragment>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{jobs.title}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{jobs.reference}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{jobs.startDate}</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>{jobs.endDate}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{jobs.description}</Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

Show.getInitialProps = async function(ctx) {
  console.log(ctx.query.id);
  const id = ctx.query.id;
  const res = await fetch(`http://localhost:3030/v2/jobs/${id}`);
  const data = await res.json();
  console.log("DATA :", data);
  return {
    jobs: data.data
  };
};

Show.propTypes = {
  jobs: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Show);
