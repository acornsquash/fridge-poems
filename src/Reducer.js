import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import { ThunkMiddleware } from 'redux-thunk'

const GET_ALL_WORDS = 'GET_ALL_WORDS'
const GET_SINGLE_WORD = 'GET_SINGLE_WORD'

const getAllWords = (words) => ({
    type: GET_ALL_WORDS,
    words: words
})

const getSingleWord = (word) => ({
    type: GET_SINGLE_WORD,
    word: word
})

export const fetchWords = () => async (dispatch) => {
    const {data} = await axios.get(`/api`)
}