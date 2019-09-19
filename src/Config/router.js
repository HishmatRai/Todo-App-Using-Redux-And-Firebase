import React from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from './../Containers/index'


export default  class BasicRouter extends React.Component{
    render(){
  return(
      <Router>
          <Route exact path="/" component={Home} />
      </Router>
  )
    }
}