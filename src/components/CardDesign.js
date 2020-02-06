import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip, MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom'



function CardDesign(props){
  return (
    <section className="text-center my-5"  >
        
      <MDBRow  >
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4" >
          <MDBCard wide ecommerce className="shadow-box-example z-depth-3" >
            <MDBCardImage
              cascade
              src={props.sec.url}
              top
              alt="sample photo"
            />
            <MDBCardBody cascade className="text-center">
              {/* <a href="#!" className="text-muted">
                <h5>Camera</h5>
              </a> */}
              <MDBCardTitle>
                <strong>
                    <a href="#!">{props.sec.title}</a>
                </strong>
              </MDBCardTitle>
              <MDBCardText>
                    {/* {props.data.description} */}
              </MDBCardText>
                    {/* <Link to = {`/section/${props.sec.name}`} ><MDBBtn color="primary" style = {{width : "100%"}} >Explore</MDBBtn></Link> */}
                    <MDBBtn color="primary" style = {{width : "100%"}} ><Link to = {`/sections/${props.sec.name}`} style = {{color : "white"}} >Explore</Link></MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}


export default CardDesign;
