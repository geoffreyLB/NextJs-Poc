import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Show = (props) => (
  <Fragment>
    {/* <ul>
      {props.shows.map((show) => (
        <li key={show.id}>
          <Link as={`/show/${show.id}`} href={`/show/${show.id}`}>
            <a>{show.title}</a>
            <a>{show.reference}</a>
            <a>{show.startDate}</a>
            <a>{show.endDate}</a>
            <a>{show.contractType}</a>
            <a>{show.description}</a>
            <a>{show.createdAt}</a>
            <a>{show.updatedAt}</a>
          </Link>
        </li>
      ))}
    </ul> */}
    <h1>show coucou</h1>
  </Fragment>
)

Index.getInitialProps = async function() {
    const res = await fetch('http://localhost:3030/v2/jobs')
    const data = await res.json()
    console.log('data', data);
    return {
        shows: data.data
    }
}

export default Show