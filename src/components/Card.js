import React from 'react'

import CardDesign from './CardDesign'

function Cards(props){
    return(
        <div>
            <br></br>
          <br></br>
            {/* {
                state.sections.map(data => {
                    return(
                        <CardDesign key = {data.id} data = {data} />
                    )
                })
            } */}

            {
                props.sections.map(sec => <CardDesign key = {sec.id} sec = {sec} />)
            }
        </div>
    )
}

export default Cards