import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";
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
import Link from "next/link";

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
  description: {
    marginBottom: 20
  },
  button: {
    margin: theme.spacing.unit
  },
  buttonsContainer: {
    marginTop: 60
  }
});

export class Show extends Component {
  static async getInitialProps(ctx) {
    const id = ctx.query.id;
    const res = await fetch(`http://localhost:3030/v2/jobs/${id}`);
    const data = await res.json();
    return {
      jobs: data.data
    };
  }

  render() {
    const { jobs, classes } = this.props;

    const createdAt = moment(jobs.createdAt).format("MMMM Do YYYY");
    const updatedAt = moment(jobs.updatedAt).format("MMMM Do YYYY");
    const startDate = moment(jobs.startDate).format("MMMM Do YYYY");
    const endDate = moment(jobs.endDate).format("MMMM Do YYYY");
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
              <Typography component="p">Date début: {startDate}</Typography>
              <Typography component="p">Date de fin: {endDate}</Typography>
              <Typography component="p">
                Type contrat: {jobs.contractType}
              </Typography>
              <Typography component="p">Créé le: {createdAt}</Typography>
              <Typography component="p">Mis à jour le: {updatedAt}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container justify="center" className="buttonsContainer">
          <Grid item>
            <Link as={"/jobs"} href={"jobs"}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Jobs List
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link as={"/edit"} href={"edit"}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Edit Job
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Show.propTypes = {
  jobs: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Show);
