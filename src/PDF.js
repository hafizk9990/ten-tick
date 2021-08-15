/*
  1. Install this: npm install --save html2canvas
  2. Install this: npm install jspdf --save
  3. Follow this link and copy-paste the answer by Aras to generate PDF: 
  https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components
*/ 

import React from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { useParams } from "react-router-dom"
import { LocationOn, Schedule } from '@material-ui/icons'
import { Done } from '@material-ui/icons'
import logo from './assets/img/logo-tick-1.png'



const generatePDF = () => {
  html2canvas(document.querySelector(".tick-content")).then(canvas => {
    document.body.appendChild(canvas);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save("Ten-Tick.pdf"); 
  })
}

const Billing = () => {
  let { data } = useParams();
  let dataObject = JSON.parse(data);
  let matchInfo = dataObject.matchInfo;
  let totalTicks = dataObject.ticks;
  let extras = dataObject.extras;

  return(
    <React.Fragment>
      <div className = "tick-content">
        <div>
          <img className = 'pdf-img' src = { logo } alt = "Logo"/>
          <p className = 'vs' style = { {color: 'gray'} }> { matchInfo.p1 } VS { matchInfo.p2 } </p>
          <div className = "location-time">
          <div>
            <LocationOn
              fontSize = "small"
              style = { {color: 'gray'} }
            />
            <span> { matchInfo.location } </span> <br /> 
          </div>
          <div>
            <Schedule 
              fontSize = "small"
              style = { {color: 'gray'} }
            />
            <span> { matchInfo.time } </span>
          </div>
        </div>
        </div>
        <p className = 'how-many-ticks'> Total Tickets: { totalTicks } </p>
        <div className = "tick-extras-list">
          {
            extras.map( (eachObject) => {
              if (eachObject.value) {
                return(
                  <ul className = 'no-bullets'>
                    <li> <Done style = {{ 'color': 'green' }}/> { eachObject.key + ' ( ' + totalTicks + ' )' } </li>
                  </ul>
                );
              }
            })
          }
        </div>
      </div>
      <div className = "generate-tick">
        <button onClick = { generatePDF }> Generate Ticket PDF </button>
        <p> 
          When you click the link above, your ticket will be automatically downloaded and saved to your compute.
          <br /> Please bear in mind that you must bring this ticket with you to the stadium to get in.
          <br /> If found without this ticket, you will not be allowed to enter the stadium
        </p>
      </div>
    </React.Fragment>
  );
}

export default Billing