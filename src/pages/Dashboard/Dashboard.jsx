
import React, { Component } from 'react'
import Header from '../../Components/Header/Header'




export class Dashboard extends Component {

  constructor(props){
    super(props)
 console.log(this.props.car);
  }
 
  listentoheader=(data)=>{

    console.log(data);


  } 
  render() {
    return (
      <div>
        <Header listentoheader={this.listentoheader} />
        <div>Hello</div>
        </div>
    )
  }
}

export default Dashboard