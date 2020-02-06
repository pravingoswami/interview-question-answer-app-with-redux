const taggingssInitialState = []

const taggingsReducers = (state = taggingssInitialState, action) => {
    switch(action.type){

        case 'SET_TAGGING' : {
            return [...action.payload]
        }

        default : {
            return state
        }
    }
}

export default taggingsReducers