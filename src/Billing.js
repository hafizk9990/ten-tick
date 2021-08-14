import { useParams } from "react-router-dom"

const Billing = () => {
  let { data } = useParams();
  let dataObject = JSON.parse(data);
  
  let matchInfo = dataObject.matchInfo;
  let totalTicks = dataObject.ticks;
  let extras = dataObject.extras;

  console.log(matchInfo);

  console.log();

  return(
    <div> 
      { totalTicks } 
      <br /> <br />
      { 
        extras.map( (object) => {
          if (object.value === true) {
            return(
              object.key
            )
          }
          return null;
        })
      }
      <br />
      < br />
      { matchInfo.p1 } VS { matchInfo.p2 }
    </div>
  );
}
 
export default Billing
