import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Oval} from 'react-loader-spinner'
import RecentMatchesCard from '../RecentMatchesCard'

import './index.css'

const SpeificTeam=()=>{
    const [teamData,setData]=useState({})
    const [latestMatchDetails,setDetails]=useState({})
    const [recentMatchesList,setList]=useState([])
    const [isLoader,setloader]=useState(true)
    const {id}=useParams()
    console.log(id)

    useEffect(()=>{
        const getTeamData=async()=>{
            const url=`https://apis.ccbp.in/ipl/${id}`
            const options={
                method:'GET'
            }
            const response=await fetch(url,options)
            const data=await response.json()
            console.log(data)
            if (response.ok===true){               
                const updatedObject={
                    latestMatchDetails:data.latest_match_details={
                        competingTeam:data.latest_match_details.competing_team,
                        competingTeamLogo:data.latest_match_details.competing_team_logo,
                        date:data.latest_match_details.date,
                        firstInnings:data.latest_match_details.first_innings,
                        manOftheMatch:data.latest_match_details.man_of_the_match,
                        matchStatus:data.latest_match_details.match_status,
                        secondInnings:data.latest_match_details.second_innings,
                        venue:data.latest_match_details.venue,
                        result:data.latest_match_details.result,
                        umpires:data.latest_match_details.umpires
                    },
                    teamBannerUrl:data.team_banner_url,
                    recentMatches:data.recent_matches.map(each=>({
                        competingTeam:each.competing_team,
                        competingTeamLogo:each.competing_team_logo,
                        date:each.date,
                        firstInnings:each.first_innings,
                        manOftheMatch:each.man_of_the_match,
                        matchStatus:each.match_status,
                        secondInnings:each.second_innings,
                        venue:each.venue,
                        result:each.result,
                        id:each.id
                    }))
                }
                setData(updatedObject)
                setDetails(updatedObject.latestMatchDetails)
                setList(updatedObject.recentMatches)
                setloader(false)
                console.log(updatedObject.recentMatches)
            }
        }
        getTeamData()
    },[])

    let className
    if(id==='RCB'){
       className='rcb'
    }
    else if (id==='CSK'){
        className='csk'
    }
    else if (id==='MI'){
        className='mi'
    }
    else if (id==='DC'){
        className='dc'
    }
    else if (id==='KXP'){
        className='kxp'
    }
    else if (id==='SH'){
        className='sh'
    }
    else if (id==='RR'){
        className='crr'
    }
    else if (id==='KKR'){
        className='kkr'
    }

    const renderLoader=()=>(
        <div className='loader-container'>
           <Oval color='blue' height={50} width={50} />
        </div>
      )

    return(
        <div className={`${className}`}>
            {isLoader?renderLoader():<div className='team-container'><img src={teamData.teamBannerUrl} alt="banner" className='banner-image'/>
            <h1>Latest Matches</h1>
            <div className='latest-matches-container'>
             <div className='textcontainer'>
              <h1 className='team-heading'>{latestMatchDetails.competingTeam}</h1>
              <p className='team-heading'>{latestMatchDetails.date}</p>
              <p className='text'>{latestMatchDetails.venue}</p>
              <p className='text'>{latestMatchDetails.result}</p>
             </div>
             <img src={latestMatchDetails.competingTeamLogo} alt="logo" className='competingteam-image' />
             <div className='first-innings'>
                <h1 className='team-heading'>First Innings</h1>
                <p className='text'>{latestMatchDetails.firstInnings}</p>
                <h1 className='team-heading'>Second Innings</h1>
                <p className='text'>{latestMatchDetails.secondInnings}</p>
                <h1 className='team-heading'>Man of the match</h1>
                <p className='text'>{latestMatchDetails.manOftheMatch}</p>
                <h1 className='team-heading'>Umpires</h1>
                <p className='text'>{latestMatchDetails.umpires}</p>
             </div>
            </div>
            <ul className='recentmatches'>
             {recentMatchesList.map(each=>(
               <RecentMatchesCard cardDetails={each} key={each.id} />
             ))}
            </ul></div>}
        </div>
    )
}

export default SpeificTeam