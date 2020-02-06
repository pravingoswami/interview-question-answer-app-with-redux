import React from 'react'
import Navbar from '../Navbar'
import QuestionDesign from './QuestionDesign'
import { connect } from 'react-redux'
import { MDBContainer, MDBAlert, MDBIcon, MDBBtn, MDBMedia  } from 'mdbreact';




function QuestionsList(props){

    const handleUrl = () => {
        props.history.push('/')
    }

    return(
        <div>
            <Navbar back = {true} handleUrl = {handleUrl} />
            <br></br>
            <br></br>
            <br></br>
            <MDBContainer> <b><h3>{props.section && props.section.title}</h3></b></MDBContainer>
            {/* <h1></h1> */}
            <QuestionDesign questions = {props.questions} section = {props.section} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    let questions = []
    const section = state.sections.find(sec => sec.name == props.match.params.section)
    if(section){
        const taggings = state.taggings.filter(tag => tag.tag_id == section.id && tag.taggable_type == "Question")
        taggings && taggings.forEach(tag => {
            const temp = state.questions.find(que => que.id == tag.taggable_id)
            if(temp){
                questions.push(temp)
            }
        })
    }
    console.log('all',questions)
    return {  
        section :section, 
        questions : questions
    }   
}

export default connect(mapStateToProps)(QuestionsList)