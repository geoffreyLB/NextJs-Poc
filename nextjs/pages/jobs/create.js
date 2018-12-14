import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import fetch from "node-fetch";
import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default class JobsCreate extends Component {
  state = {
    contractType: "",
    description: "",
    endDate: "",
    id: "",
    reference: "",
    startDate: "",
    title: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleValidate = async () => {
    const {
      contractType,
      description,
      endDate,
      reference,
      startDate,
      title
    } = this.state;

    const body = {
      contractType: "temporaryWork",
      description,
      endDate: "12/10/2018",
      reference,
      startDate: "12/10/2018",
      title
    };

    await fetch("http://localhost:3030/v2/jobs", {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });
  };

  render() {
    const {
      state: { contractType, description, endDate, reference, startDate, title }
    } = this;

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
            type="date"
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
        <Link as={`/jobs`} href={`jobs`}>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleValidate}
          >
            Valider
          </Button>
        </Link>
      </Grid>
    );
  }
}
