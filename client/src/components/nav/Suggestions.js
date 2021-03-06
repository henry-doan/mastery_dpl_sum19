import React from 'react';
import { Link } from 'react-router-dom';

const SearchSuggestions = ({results, query, toggle}) => {

  if(results.length > 0) {
    const options = results.map(r => {
      const regex = new RegExp(query, 'gi')
      const { id, title, description, workbook, subtitle, } = r
      if (r.title.match(regex)) 
        return(<li key={r.id}>
          <Link onClick={toggle} to={{pathname: `/course/${r.id}`, state: { id, title, description, workbook, subtitle, } }}>{r.title}</Link>
        </li>)
    })
    return <ul>{options}</ul>
  }
  return <></>
}

export default SearchSuggestions;

// Check if the results match the search letters
// Change results with each letter typed
// Go to the course when the user presses 'enter'
// Show results not found if the user types the wrong text before pressing 'enter'
// Turn my results into links