import React, { Component } from 'react'



export default class About extends Component {
    state = {
        isDisplaying: false
    }

    isDisplayingFun = () => {
        if (this.state.isDisplaying === false) {
            this.setState({
                isDisplaying: true
            })
        } else {
            this.setState({
                isDisplaying: false
            })
        }
    }
    render() {
    	let toggle = <div></div>
    	if(this.state.isDisplaying){
    	  toggle = <div><h1>About the Project</h1><p>I would like to build out a an app to help you select a netflix movie to watch for a road trip. The website will show you a photo of of the series and offer a description and series length. It will incorpate the Backend netflix database I have alraedy created to serve the website information. I plan to pull data in from google maps api to let you compare time of trip to series length ultimatly helping you decided which series to watch.</p></div>
		} else {
			toggle = <div></div>
		}
        return (
			<div>
			{toggle}
			<button onClick={this.isDisplayingFun}>
			hide : show
			</button>
				</div>
			
        )

    }
}