import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';

export default class MyMoment extends React.Component {
  render () {
    let myNewDate = new Date ().getTime ();
    // moment (myNewDate).format ('DDD/MMM/Do/YYYY/ [:] /hh/mm');
    return <Moment>{myNewDate}</Moment>;
  }
}
