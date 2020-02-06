import React from 'react'

import CardDesign from './CardDesign'

function Cards(props){
    return(
        <div>
            <br></br>
          <br></br>
        {/* hiii */}

            {
                props.sections.map(sec => <CardDesign key = {sec.id} sec = {sec} />)
            }
        </div>
    )
}

export default Cards