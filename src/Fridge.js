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

    handleClick(id) { 
        switch(id) {
            case 'one':
            this.setState({
                one: RandomWord()
            })
            break
            case 'two':
            this.setState({
                two: RandomWord()
            })
            break
            case 'three':
            this.setState({
                three: RandomWord()
            })
            break
            case 'four':
            this.setState({
                four: RandomWord()
            })
            break
            case 'five':
            this.setState({
                five: RandomWord()
            })
            break
            case 'six':
            this.setState({
                six: RandomWord()
            })
            break
            case 'seven':
            this.setState({
                seven: RandomWord()
            })
            break
            default: 
            this.setState = intitialState
        }
        
    }

    render() {
        return(
            <div>
            <button onClick={() => this.handleClick('one')}>{this.state.one}</button>
            <button onClick={() => this.handleClick('two')}>{this.state.two}</button>
            <button onClick={() => this.handleClick('three')}>{this.state.three}</button>
            <button onClick={() => this.handleClick('four')}>{this.state.four}</button>
            <button onClick={() => this.handleClick('five')}>{this.state.five}</button>
            <button onClick={() => this.handleClick('six')}>{this.state.six}</button>
            <button onClick={() => this.handleClick('seven')}>{this.state.seven}</button>
            </div>
        )
    }
}