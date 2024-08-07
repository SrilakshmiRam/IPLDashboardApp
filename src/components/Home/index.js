import {Component} from 'react'

import {Oval} from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css';

class Home extends Component{
  state={dataList:[],isLoader:true}

  componentDidMount(){
    this.getIplData()
  }

  getIplData=async()=>{
     const url='https://apis.ccbp.in/ipl'
     const oprions={
      method:'GET'
     }
     const response=await fetch(url,oprions)
     const data=await response.json()
     if(response.ok===true){
      const {teams}=data
      const updatedData=teams.map(each=>({
        id:each.id,
        name:each.name,
        teamImageUrl:each.team_image_url
      }))
      this.setState({
        dataList:updatedData,
        isLoader:false
      })
     }
  }

  renderLoader=()=>(
    <div className='loader-container'>
       <Oval color='blue' height={50} width={50} />
    </div>
  )

  render(){
    const {dataList,isLoader}=this.state
    return(
      <div className='app-container'>
        <div className='heading-container'>
           <img src='https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png' alt="ipl logo"
            className='logo' />
           <h1 className='app-heading'>Ipl Dashboard</h1>
        </div>
        {isLoader?this.renderLoader():<ul className='teams-list'>
          {dataList.map(each=>(
            <TeamCard teamDetails={each} key={each.id} />
          ))}
        </ul>}
      </div>
    )
  }
}

export default Home;