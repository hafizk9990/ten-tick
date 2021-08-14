import { Done } from '@material-ui/icons'

const ExtrasCard = ( {data, index, HandleClick, render} ) => {
  if (render === 'removeData') {
    return(
      <div className = 'display-area' style = { {backgroundColor: 'white'} }>
        <div key = { index } className = 'single-card-extras'>
          <div className = "item-name"> { data.key } </div>
          <div className = 'item-price'> { data.price } </div>
          <div>
            <Done style = {{ 'color': 'green '}}/>
            <button className = "item-added extras-buttons" onClick = { () => HandleClick(index) }> Added </button>
          </div>
        </div>
      </div>
    );
  }
  else if (render === 'addData') {
    return(
      <div className = 'display-area'>
        <div key = { index } className = 'single-card-extras' style = { {width: '100'} }>
        <div className = "item-name"> { data.key } </div>
        <div className = 'item-price'> { data.price } </div>
          <div>
            <button className = 'extras-buttons' onClick = { () => HandleClick(index) }> Add </button>
          </div>
        </div>
      </div>
    )
  }
}
 
export default ExtrasCard 
