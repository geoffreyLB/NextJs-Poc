import React, { Fragment } from "react";

import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Fragment>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/show/${show.id}`} href={`/show/${show.id}`}>
            <a>{show.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Fragment>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:3030/v2/jobs");
  const data = await res.json();
  console.log("data", data);
  return {
    shows: data.data
  };
};

export default Index;
