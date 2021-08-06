import React from 'react'
import RandomWord from 'random-words'



export default class Fridge extends React.Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        console.log(RandomWord())
    }
    render() {
        return(
            <button onClick={() => this.handleClick()}></button>
        )
    }
}