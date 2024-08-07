import './index.css'

const RecentMatchesCard=props=>{
    const {cardDetails}=props
    const {competingTeam,competingTeamLogo,result,matchStatus}=cardDetails
    let color 
    if(matchStatus==='Won'){
        color='color-text1'
    } 
    else if(matchStatus==='Lost'){
        color='color-text2'
    }
       
    return(
        <li className='card-item'>
            <img src={competingTeamLogo} alt="logo" className='card-image' />
            <h1 className='card-heading'>{competingTeam}</h1>
            <p className='card-text'>{result}</p>
            <p className={color}>{matchStatus}</p>
        </li>
    )
}


export default RecentMatchesCard