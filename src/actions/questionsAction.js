import axios from 'axios'

export const setQuestion = (question) => {
    return {type : 'SET_QUESTION', payload : question} 
}

export const StartGetQuestion = () => {
    return (dispatch) => {
        axios.get('https://dct-cors.herokuapp.com/http://code.dctacademy.com/api/v1/ml/data/questions?key=874561e61c491bcca28217400c517f55')
            .then(response => {
                // console.log(response.data)
                dispatch(setQuestion(response.data))
            })
            .catch(err => console.log(err))
    }
}
