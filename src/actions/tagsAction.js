import axios from 'axios'

export const setTag = (tag) => {
    return {type : 'SET_TAG', payload : tag} 
}

export const StartGetTag= () => {
    return (dispatch) => {
        axios.get('https://dct-cors.herokuapp.com/http://code.dctacademy.com/api/v1/ml/data/tags?key=874561e61c491bcca28217400c517f55')
            .then(response => {
                // console.log(response.data)
                dispatch(setTag(response.data))
            })
            .catch(err => console.log(err))
    }
}
