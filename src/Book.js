import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"

const Book = () => {
  let { data } = useParams();
  let matchInfo = JSON.parse(data);

  const [totalTicks, setTotalTicks] = useState(0);

  return(
    <React.Fragment>
      <div className = 'book-page'>
        <div className = "book-heading">
          { matchInfo.p1 } VS { matchInfo.p2 } <br />
        </div>
        <div className = "book-match-info">
          { matchInfo.location } at { matchInfo.time } <br />
        </div>
        <label className = "book-form-label"> How Many Tickets? </label>
        <p className = "book-remaining"> Remaining: { matchInfo.cap - matchInfo.sold }</p>
        <form className = "book-form">
          <input
            type = "text" 
            value = { totalTicks }
            onChange = { (event) => setTotalTicks(event.target.value) }
          />
        </form>
        {
          ( parseInt(totalTicks) > 0 ) &&
          ( parseInt(totalTicks) <= `${ matchInfo.cap - matchInfo.sold }` ) &&
          <Link to = {`/extras/${ JSON.stringify( {'matchInfo': matchInfo, 'ticks': totalTicks } ) }`}>
            <button className = "book-button"> Next </button>
          </Link>
        }
      </div>
    </React.Fragment>
  );
}

export default Book
