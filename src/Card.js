import React from 'react'

const Card = ({ match }) => {
  return (
    <div className = 'card' style = { {margin: '5%', width: '50%', padding: '10px'} }>
      <div className = 'card-content'>
        { match.player1 } VS { match.player2 } <br />
        { match.location } <br />
        { match.time } <br />
        { match.soldOut } / { match.cap } Sold Out <br />
      </div>
    </div>
  );
}

export default Card
