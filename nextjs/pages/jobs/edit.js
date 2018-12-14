import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import fetch from "node-fetch";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default class JobsEdit extends Component {
  state = {
    contractType: "",
    createdAt: "",
    description: "",
    endDate: "",
    id: "",
    reference: "",
    startDate: "",
    title: "",
    updatedAt: ""
  };

  static async getInitialProps({ query: { id } }) {
    const res = await fetch(`http://localhost:3030/v2/jobs/${id}`);
    const { data } = await res.json();

    return { job: data };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.job.id !== prevState.id) {
      return {
        contractType: nextProps.job.contractType,
        createdAt: nextProps.job.createdAt,
        description: nextProps.job.description,
        endDate: nextProps.job.endDate,
        id: nextProps.job.id,
        reference: nextProps.job.reference,
        startDate: nextProps.job.startDate,
        title: nextProps.job.title,
        updatedAt: nextProps.job.updatedAt
      };
    }

    return null;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      state: {
        contractType,
        createdAt,
        description,
        endDate,
        reference,
        startDate,
        title
      },
      props: { job }
    } = this;

    if (!job) {
      return null;
    }

    return (
      <Grid container justify="center" spacing={24}>
        <Grid item xs={6}>
          <TextField
            name="title"
            label="Titre"
            value={title}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="contractType"
            label="Type de contract"
            value={contractType}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            multiline
            name="startDate"
            label="Date de début"
            value={startDate}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            multiline
            name="endDate"
            label="Date de fin"
            value={endDate}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            multiline
            name="reference"
            label="Reference"
            value={reference}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="createdAt"
            label="Date de Création"
            value={createdAt}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            name="description"
            label="description"
            value={description}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
      </Grid>
    );
  }
}
