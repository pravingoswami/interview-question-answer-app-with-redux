import axios from 'axios'

export const setSections = (section) => {
    return {type : 'SET_SECTION', payload : section} 
}

export const StartGetSections = () => {
    return (dispatch) => {
        axios.get('https://dct-cors.herokuapp.com/https://teleological-week.000webhostapp.com/sections.json')
            .then(response => {
                // console.log(response.data)
                dispatch(setSections(response.data))
            })
            .catch(err => console.log(err))
    }
}
