import ExtrasCard from './ExtrasCard'

import { useState } from 'react'
import { useParams, Link } from "react-router-dom"

const Extras = () => {
  let { data } = useParams();
  let dataObject = JSON.parse(data);
  let matchInfo = dataObject.matchInfo;
  let totalTicks = dataObject.ticks;

  let extrasArray = [
    {key: 'Popcorn', price: '750 RS', value: false},
    {key: 'Ice Cream', price: '350 RS', value: false}, 
    {key: 'Energy Drink', price: '150 RS', value: false}, 
    {key: 'Carbonated Drink', price: '100 RS', value: false}, 
    {key: 'Alchoholic Drink', price: '5000 RS', value: false}, 
    {key: 'Chewing Gums', price: '50 RS', value: false}, 
    {key: 'Juice & Chips ', price: '250 RS', value: false} 
  ];

  const [extras, setExtras] = useState( extrasArray );
  let displayArray = [];

  const HandleClick = (index) => {
    setExtras( (previousState) => {
      let selectedItem = { key: previousState[index].key, price: previousState[index].price, value: !previousState[index].value };
      var newState = [ 
        ...previousState.slice(0, index),
        selectedItem, 
        ...previousState.slice(index + 1, extrasArray.length)
      ]
      console.log(newState);
      return newState;
    });
  }

  displayArray.push(
    <div>
      {
        extras.map( (data, index) => {
          if (data.value) {
            return(
              <ExtrasCard 
                data = { data }
                index = { index }
                HandleClick = { HandleClick }
                render = 'removeData'
              />
            )
          }
          else {
            return(
              <ExtrasCard 
                data = { data }
                index = { index }
                HandleClick = { HandleClick }
                render = 'addData'
              />
            )
          }
        })
      }
    </div>
  );

  return(
    <div className = 'extras'>
      <div className = 'extras-heading'>
        Spice Up Your Experience!
        <p className = 'extras-description'>
          Grab some quick snacks to make your experience even more valuable and memorable!
        </p>
      </div>
      <div className = "display-area">
        { displayArray }
      </div>
      <p className = 'extras-note'>
        <span> Note: </span> Each snack will be replicated as many times as the total tickets purchased
      </p>
      <p className = 'extras-note'>
        <span> Note: </span> Price shown above is price per piece, not after replication
      </p>
      <Link to = {`/billing/${ JSON.stringify( {'matchInfo': matchInfo, 'ticks': totalTicks, 'extras': extras } ) }`}>
        <button className = "book-button"> Next </button>
      </Link>
    </div>
  );
}

export default Extras
