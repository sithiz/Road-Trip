import React, { Component } from 'react'




export default class ListItem extends Component {

    state = {
    	listItem: [],
    	ActorsLoaded: this.props.actorCheck,
    	ShowsLoaded: this.props.showCheck
    }
    listItem = () =>{
    	let newData = []
    	if(this.state.ShowsLoaded){
    	newData.push(<li className='Shows'><h1>Shows</h1></li>)
    	 for(let i = 0; i< this.props.data.length; i++){
    		newData.push(<li className='Shows'>{this.props.data[i].show_title}</li>)
    	 } 
    	 this.setState({
    	 	listItem: newData,
    	 	ShowsLoaded: false //should resolve at the end as false to indicate finished with process  
    	 })
    	} else if(this.state.ActorsLoaded){
    	newData.push(<li className='Actors'><h1>Actors</h1></li>)
    		for(let i = 0; i< this.props.data.length; i++){
    		newData.push(<li className='Actors'>{this.props.data[i].actor_name}</li>)
    	 } 
    	 this.setState({
    	 	listItem: newData,
    	 	ActorsLoaded: false 
    	 })
    	}
    }

		componentDidMount(){
			this.listItem()
		}

    render(){
        return (
            <div>
            <ul>
			{this.state.listItem}
			</ul>
			</div>

        )
    }
}
