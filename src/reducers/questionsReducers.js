const questionsInitialState = []

const questionsReducers = (state = questionsInitialState, action) => {
    switch(action.type){

        case 'SET_QUESTION' : {
            return [...action.payload]
        }

        default : {
            return state
        }
    }
}

export default questionsReducers