import React, { Fragment } from "react";

import Button from "@material-ui/core/Button";
import Link from "next/link";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const Home = props => (
  <Fragment>
    <h1>Welcome to MisterJobs with NextJS</h1>
    <Link as={`/jobs/`} href={`/jobs/`}>
      <Button
        variant="contained"
        color="secondary"
        className={props.classes.button}
      >
        Get started
      </Button>
    </Link>
  </Fragment>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
