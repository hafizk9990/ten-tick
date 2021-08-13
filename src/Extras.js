import { useParams } from "react-router-dom"

const Extras = () => {
  let { data } = useParams();
  let dataObject = JSON.parse(data);
  let matchInfo = dataObject.matchInfo;
  let totalTicks = dataObject.ticks;

  return(
    <div>
      totalTicks: { totalTicks }
    </div>
  );
}
 
export default Extras
