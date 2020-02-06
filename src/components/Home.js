import React from 'react';

import Navbar from './Navbar'
import Cards from './Card'

import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from "mdbreact";
import { connect } from 'react-redux';



function Home(props){
    return(
        <div>
            {console.log(props.sections)}
            <Navbar />
            <MDBContainer>
  
            <Cards sections = {props.sections} />
            </MDBContainer>
  
        </div>
      )
}

const mapStateToProps = (state) => {
    return {
        sections : state.sections
    }
}

export default connect(mapStateToProps)(Home);
