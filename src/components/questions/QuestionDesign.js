import React from 'react'
import { MDBContainer, MDBAlert, MDBIcon, MDBBtn, MDBMedia  } from 'mdbreact';
import {Link} from 'react-router-dom'

function QuestionDesign(props){
    return(
        <div>

            <div>

                {
                    props.questions.map((question, i) => {
                        return (
                            <div>
                                                                    <Link style = {{textDecoration : "none", color : "white"}} to = {`/sections/${props.section.name}/${question.slug}`} >
                                                <MDBBtn color="dark" className="shadow-box-example z-depth-2" style = {{textAlign : "left", width : "97%"}}  >

                                {/* <MDBBtn color="dark" className="shadow-box-example z-depth-2" style = {{textAlign : "left", width : "97%"}} onClick = {() => this.handleQuestion(this.props.data.id)}  > */}
                                    
                                    {/* <h1>hiiii</h1> */}



                                <MDBMedia>

                                {question &&  <MDBMedia body> {i + 1}.&nbsp; {question.title}</MDBMedia> }
                                <MDBMedia right middle style = {{marginLeft : "10px"}} >
                                            <MDBIcon icon="angle-right" style = {{float : "right"}} size = "2x" />
                                    </MDBMedia>
                                </MDBMedia>


                                </MDBBtn>
                                </Link>
                            </div>
                        )
                    })
                }


           



            </div>

        </div>
    )
}

export default QuestionDesign