import React, { Component } from 'react'


export default class LandingPage extends Component {

    state = {
        shows: []
    }
    //componentDidMount()

    dataFetch = () => {
        fetch('http://127.0.0.1:9000/Shows')
            .then(response => {
                let data = response.json()
                return data
            })
            .then(result => this.setState({
                shows: result
            }))
            .catch(error => console.log(error))
    }


    render() {
        return (
            <div>
			<button onClick={this.dataFetch}> Show data </button>
			</div>
        )
    }


}