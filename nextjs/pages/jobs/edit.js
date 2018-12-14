import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import TextField from "@material-ui/core/TextField";

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

  handleChange = () => {};

  render() {
    // const {
    //   contractType,
    //   createdAt,
    //   description,
    //   endDate,
    //   id,
    //   reference,
    //   startDate,
    //   title,
    //   updatedAt
    // } = this.props;
    console.log(this.state);
    return (
      <form noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
        />
      </form>
    );
  }
}
