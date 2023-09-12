import React, { Component } from 'react'
import Beer from './Beer';


export default class getBeers extends Component {
    constructor(props) {
        super(props);
        console.log("consstructor initialized")
        this.state = {
                    beers: []
                }
    }
    
    componentDidMount() { 
        console.log("component mounted")
        fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((data) => 
        this.setState({
            beers: [...data]
        })
        )
    }
    componentDidUpdate() {
        console.log("component updated", this.state.beers)
    }   
    

    render() {
        console.log('render')
        return (
            <div className='page'>
                <h1>Beers Yum!</h1>
                <ul className='all-beers'>
                    {this.state.beers.map((beer) => {
                        return (<Beer beer={beer} key={beer.id} />)
                    })}
                </ul>
            </div>
        )
    }
} //end of component
