import React from 'react'
import { LocationOn, Schedule } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import murray from './assets/img/murray.jpg'
import maria from './assets/img/maria.jpg'
import monflis from './assets/img/monflis.jpg'
import rafa from './assets/img/rafa.jpeg'

const Card = ({ match, index }) => {
  const imgArray = [murray, maria, monflis, rafa];

  return(
    <div className = 'single-card'>
      <div className = "stats">
        { match.soldOut } out of { match.cap } tickets sold
      </div>
      <div className = "match-img">
        <img src = { imgArray[index] } alt = "Imgae"/>
      </div>
      <div className = 'card-content'>
        <div className = "vs">
          { match.player1 } VS { match.player2 }
        </div>
        <div className = "location-time">
          <div>
              <LocationOn
                fontSize = "small"
                style = { {color: 'gray'} }
              />
          <span> { match.location } </span> <br /> 
          </div>
          <div>
            <Schedule 
              fontSize = "small"
              style = { {color: 'gray'} }
            />
            <span> { match.time } </span>
          </div>
        </div>
      </div>
      <div className = "book">
        {
          (parseInt(match.soldOut) < parseInt(match.cap)) &&
          <Link to = "/book">
            <button> Book Now </button>
          </Link>
        }
        {
          (parseInt(match.soldOut) === parseInt(match.cap)) &&
            <button> Sold Out </button>
        }
      </div>
    </div>
  );
}

export default Card
