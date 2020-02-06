import { createStore, combineReducers, applyMiddleware } from "redux"
import sectionsReducers from '../reducers/sectionsReducers'
import taggingsReducers from '../reducers/taggingsReducers'
import tagsReducers from '../reducers/tagsReducers'
import questionsReducers from '../reducers/questionsReducers'
import thunk from "redux-thunk"

const configureStore = () => {
    const store = createStore(combineReducers({
        questions : questionsReducers,
        taggings : taggingsReducers,
        sections : sectionsReducers,
        tags : tagsReducers
    }), applyMiddleware(thunk))

    return store
}


export default configureStore