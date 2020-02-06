import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import { convertNodeToElement } from 'react-html-parser';
import {MDBContainer, Row, MDBBox} from 'mdbreact'



// import Navbar from '../Navbar'
  


function Show(props){

        return(
            <div>
                {props.data && (
                     <div>
                     <script type="text/javascript" src="https://dct-cors.herokuapp.com/https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.19/browser.min.js"></script>
                     <br></br>
                     <br></br>
                 <strong><h4>{props.data.title}</h4></strong>
                 {/* <pre>{props.data.answer}</pre> */}
                 {/* {JSON.parse(props.data.answer)} */}
 
               {ReactHtmlParser(props.data.answer)}
 
 
 
 
              
              </div>
 
                )}
            </div>
        )
}

export default Show