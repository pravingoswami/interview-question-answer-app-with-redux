import { createStore, combineReducers, applyMiddleware } from "redux"
import sectionsReducers from '../reducers/sectionsReducers'
import taggingsReducers from '../reducers/taggingsReducers'
import tagsReducers from '../reducers/tagsReducers'
import questionsReducers from '../reducers/questionsReducers'
import thunk from "redux-thunk"

const configureStore = () => {
    const store = createStore(combineReducers({
        sections : sectionsReducers,
        tags : tagsReducers,
        taggings : taggingsReducers,
        questions : questionsReducers
    }), applyMiddleware(thunk))

    return store
}


export default configureStore