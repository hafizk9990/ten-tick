import { Done } from '@material-ui/icons'

import { useState } from 'react'
import { useParams, Link } from "react-router-dom"

const Extras = () => {
  let { data } = useParams();
  let dataObject = JSON.parse(data);
  let matchInfo = dataObject.matchInfo;
  let totalTicks = dataObject.ticks;

  let extrasArray = [
    {key: 'Popcorn -- 700 RS', value: false},
    {key: 'Ice Cream -- 350 RS', value: false}, 
    {key: 'Energy Drink -- 150 RS', value: false}, 
    {key: 'Carbonated Drink -- 100 RS', value: false}, 
    {key: 'Alchoholic Drink -- 5000 RS', value: false}, 
    {key: 'Chewing Gums -- 50RS', value: false}, 
    {key: 'Juice & Chips -- 250 RS ', value: false} 
  ];
  const [extras, setExtras] = useState( extrasArray );
  let displayArray = [];

  const HandleClick = (index) => {
    console.log(index);

    setExtras( (previousState) => {
      let selectedItem = { key: previousState[index].key, value: !previousState[index].value };
      var newState = [ 
        ...previousState.slice(0, index),
        selectedItem, 
        ...previousState.slice(index + 1, extrasArray.length - 1)
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
              <div key = { index } className = 'item'>
                <div className = "item-name">
                  { data.key }
                </div>
                <div>
                  <button className = "item-added extras-buttons" onClick = { () => HandleClick(index) }> Added </button> &nbsp; 
                  <Done style = {{ 'color': 'green '}}/>
                </div>
                <hr />
              </div>
            )
          }
          else {
            return(
              <div key = { index } className = 'item'>
                <div className = "item-name">
                  { data.key }
                </div>
                <div>
                  <button className = 'extras-buttons' onClick = { () => HandleClick(index) }> Add </button>
                </div>
                <hr className = "hr"/>
              </div>
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
          Grap some quick snacks to make your experience even more valuable and memorable!
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
