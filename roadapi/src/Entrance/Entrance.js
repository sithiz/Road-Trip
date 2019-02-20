import React, { Component } from 'react'

export default class Entrance extends Component {
	render() {
		return(
				<div> 
					<button onClick={this.props.loadPage}> 
						Click Me!!!!!
						</button>
				</div>


			)
	}
}