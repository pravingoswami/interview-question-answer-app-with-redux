import React from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'
import QuestionsList from './components/questions/Questions'
import Answer from './components/answer/Answer'

class App extends React.Component{

  render(){
    return(
      <div>
        <BrowserRouter>
        {/* <Link to = "/" ></Link>
        <Link to = "/sections/:section" ></Link> */}

        <Route path = "/" component = {Home} exact = {true} />
        <Route path = "/sections/:section" component = {QuestionsList}  exact = {true}/>
        <Route path = "/sections/:section/:answer" component = {Answer}  exact = {true}/>
        </BrowserRouter>
      </div>
    )
  }

}


export default App
