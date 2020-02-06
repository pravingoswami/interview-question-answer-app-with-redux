import axios from 'axios'

export const setTagging = (tagging) => {
    return {type : 'SET_TAGGING', payload : tagging} 
}

export const StartGetTagging = () => {
    return (dispatch) => {
        axios.get('https://dct-cors.herokuapp.com/http://code.dctacademy.com/api/v1/ml/data/taggings?key=874561e61c491bcca28217400c517f55')
            .then(response => {
                // console.log(response.data)
                dispatch(setTagging(response.data))
            })
            .catch(err => console.log(err))
    }
}
