import React from 'react';

const Suggestions = props => {
  const options =
    props.results &&
    props.results.map (r => (
      <li key={r.id}>
        {r.name}
      </li>
    ));
  return <ul className="ul-list">{options}</ul>;
};
export default Suggestions;
