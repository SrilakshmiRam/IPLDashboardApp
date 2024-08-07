import {Link} from 'react-router-dom';

import './index.css'

const TeamCard=props=>{
    const {teamDetails}=props
    const {name,teamImageUrl,id}=teamDetails
    return(
        <Link to={`/team/${id}`} className='nav-link'>
          <li className='team-item'>
            <img src={teamImageUrl} alt={name} className='team-image' />
            <p className='team-title'>{name}</p>
          </li>
        </Link>
    )
}

export default TeamCard