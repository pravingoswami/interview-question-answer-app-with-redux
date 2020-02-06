import React from 'react'
import Show from './Show'
import Navbar from '../Navbar'
import { connect } from 'react-redux'
import {MDBContainer} from 'mdbreact'

function Answer(props){

    const handleUrl = () => {
        props.history.push(`/sections/${props.match.params.section}`)
    }

    return(
        <div>
                       <Navbar back = {true} handleUrl = {handleUrl} />
                       <br></br>

            <MDBContainer>{console.log(props.question)}
                <Show data = {props.question && props.question} />
                </MDBContainer>

        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        question : state.questions.find(que => que.slug == props.match.params.answer)
    }
}

export default connect(mapStateToProps)(Answer)