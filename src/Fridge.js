import React from 'react'
import RandomWord from 'random-words'

const intitialState = {
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: ''
}

export default class Fridge extends React.Component {
    constructor() {
        super()
        this.state = intitialState
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            one: RandomWord()
        })
    }
    render() {
        return(
            <div>
            <button onClick={() => this.handleClick()}>{this.state.one}</button>
            <button></button>
            <button> </button>
            </div>
        )
    }
}