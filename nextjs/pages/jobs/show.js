import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import fetch from "isomorphic-unfetch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  media: {
    height: 130
  },
  body: {
    display: "flex",
    justifyContent: "center",
    marginTop: 50
  },
  title: {
    color: "red"
  },
  description: {
    marginBottom: 20
  }
});

const Show = ({ classes, jobs }) => {
  return (
    <Fragment>
      <Grid container spacing={24} className={classes.body}>
        <Card className={classes.card}>
          <CardHeader
            className={classes.title}
            title={jobs.title}
            subheader={`ref: ${jobs.reference}`}
          />
          <CardMedia
            className={classes.media}
            image="https://www.mistertemp.com/wp-content/uploads/2017/11/logo_mister_temp_RP-09.png"
            title="Mister Temp"
          />
          <CardContent>
            <Typography className={classes.description} component="p">
              {jobs.description}
            </Typography>
            <Typography component="p">Date début: {jobs.startDate}</Typography>
            <Typography component="p">Date de fin: {jobs.endDate}</Typography>
            <Typography component="p">
              Type contrat: {jobs.contractType}
            </Typography>
            <Typography component="p">Créé le: {jobs.createdAt}</Typography>
            <Typography component="p">
              Mis à jour le: {jobs.updatedAt}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
};

Show.getInitialProps = async function(ctx) {
  const id = ctx.query.id;
  const res = await fetch(`http://localhost:3030/v2/jobs/${id}`);
  const data = await res.json();
  return {
    jobs: data.data
  };
};

Show.propTypes = {
  jobs: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Show);
