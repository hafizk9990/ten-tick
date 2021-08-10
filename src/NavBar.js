import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className = 'navbar'>
      
      <div className = 'name-tagline'>
        <span className = 'ten-tick'> Ten-Tick </span>
        <p> Purchase Tennis Tickets Online </p>
      </div>
      
      <div className = 'navlinks'>
        <Link to = "/">
          <span className = "home-button"> Home </span>
        </Link>
        <Link to = "/about">
          <span className = "home-button"> About </span>
        </Link>
      </div>

    </div>
  );
}

export default NavBar
