const tagsInitialState = []

const tagsReducers = (state = tagsInitialState, action) => {
    switch(action.type){

        case 'SET_TAG' : {
            return [...action.payload]
        }

        default : {
            return state
        }
    }
}

export default tagsReducers