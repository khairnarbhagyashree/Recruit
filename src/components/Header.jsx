import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        <nav>
        <ul>
          <li><Link to="/Job">Job</Link></li>
          <li><Link to="/matches">Matches</Link></li>
          <li><Link to="/screening">Screening</Link></li>
        </ul>
      </nav>
    
    </div>
  )
}

export default Header