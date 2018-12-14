import React, { Fragment } from "react";

import Fab from "@material-ui/core/Fab";
import fetch from "node-fetch";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  fab: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3
  }
});

const Index = ({ classes, jobs }) => (
  <Fragment>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Référence</TableCell>
            <TableCell>Intitulé</TableCell>
            <TableCell>Date de début</TableCell>
            <TableCell>Date de fin</TableCell>
            <TableCell>Type de contrat</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jobs.map(job => {
            return (
              <TableRow key={job.id}>
                <TableCell>
                  <Link as={`/jobs/${job.id}`} href={`/jobs/${job.id}`}>
                    <a>{job.reference}</a>
                  </Link>
                </TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.startDate}</TableCell>
                <TableCell>{job.endDate}</TableCell>
                <TableCell>{job.contractType}</TableCell>
                <TableCell>{job.description}</TableCell>
              </TableRow>
            );
          })}
          <TableRow>
            <Link as={`/jobs/create`} href={`jobs/create`}>
              <Fab color="primary" aria-label="Add" className={classes.fab}>
                +
              </Fab>
            </Link>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </Fragment>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:3030/v2/jobs");
  const data = await res.json();
  return {
    jobs: data.data
  };
};

Index.propTypes = {
  jobs: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Index);
