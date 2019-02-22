import React, { Component } from 'react'
import List from './ShowsList'
let showData = 'http://127.0.0.1:9000/Shows'
let actorData = 'http://127.0.0.1:9000/Actors'

export default class LandingPage extends Component {

    state = {
        data: [],
        showData: false,
        actorData: false 
    }
    //componentDidMount()


    showDataFetch = () => {
        fetch(showData)
            .then(response => {
                let data = response.json()
                return data
            })
            .then(result => this.setState({
                data: result,
                showData: true,
                actorData : false 
            }))
            .catch(error => console.log(error))
    }
    ActorDataFetch = () => {
        fetch(actorData)
            .then(response => {
                let data = response.json()
                return data
            })
            .then(result => this.setState({
                data: result,
                actorData: true,
                showData:false
            }))
            .catch(error => console.log(error))
    }


    render() {

        let Shows;
        let Actors;

        const AvailbeDataShows = this.state.showData
        if (AvailbeDataShows &&  this.state.actorData === false ) {
            Shows = <List data={this.state.data} showCheck={this.state.showData}/>
        }

        const AvailbeDataActors = this.state.actorData
        if (AvailbeDataActors && this.state.showData === false) {
            Actors = <List data={this.state.data} actorCheck={this.state.actorData} />
        }

        return (
            <div>
			<button onClick={this.showDataFetch}> Show Data </button>
			<button onClick={this.ActorDataFetch}> Actor Data</button>
			{Shows}
			{Actors}
			</div>
        )
    }


}