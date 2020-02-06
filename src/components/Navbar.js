import React from "react";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
    MDBIcon
  } from 'mdbreact';

import {Link, BrowserRouter, Route} from 'react-router-dom'

function Navbar(props){
    return(
        <BrowserRouter>
          <MDBNavbar
            className = "light-blue"
            dark expand="md" scrolling fixed="top"
            light
          >
              
                {
                    (props.back) ?                   <MDBNavbarBrand > 
                 <MDBIcon icon="arrow-left"  onClick = { props.handleUrl } /> &nbsp;&nbsp;
                      <b>E-Learning</b>
                      
                      </MDBNavbarBrand> : <MDBNavbarBrand > 
                    <b>E-Learning</b>
                    
                    </MDBNavbarBrand>
                }
          </MDBNavbar>
      </BrowserRouter>
    
    )
}

export default Navbar