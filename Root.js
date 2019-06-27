import React, {Component } from 'react'
import Header from './component/Header'
import Banner from './component/Banner'
import Body from './component/Body'
import Footer from './component/Footer'

class Root extends Component{
  render(){
    return(
    <div>
        <Header/>
        <Banner/>
        <Body/>
        <Footer/>
    </div>
    );
  }
}

export default Root