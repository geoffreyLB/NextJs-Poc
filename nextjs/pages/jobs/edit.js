import React, { Component, Fragment } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
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

  handleSubmit = async () => {
    const {
      props: {
        job: { id }
      },
      state: {
        contractType,
        createdAt,
        description,
        endDate,
        reference,
        startDate,
        title
      }
    } = this;

    const res = await fetch(`http://localhost:3030/v2/jobs/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        contractType,
        createdAt,
        description,
        endDate,
        reference,
        startDate,
        title
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const { data } = await res.json();

    this.setState({
      contractType: data.contractType,
      createdAt: data.createdAt,
      description: data.description,
      endDate: data.endDate,
      id: data.id,
      reference: data.reference,
      startDate: data.startDate,
      title: data.title,
      updatedAt: data.updatedAt
    });
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
      <Fragment>
        <AppBar position="static" color="primary">
          Modifier une Annonce
          <Card square>
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
                  disabled
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
                  disabled
                  onChange={this.handleChange}
                  margin="normal"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  name="description"
                  label="Description"
                  value={description}
                  onChange={this.handleChange}
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={this.handleSubmit}
            >
              Modifier
            </Button>
          </Card>
        </AppBar>
      </Fragment>
    );
  }
}
