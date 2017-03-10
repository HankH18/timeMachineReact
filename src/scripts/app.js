import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

var d = new Date()
var year = d.getFullYear()

var PageLayout = React.createClass ({
	getInitialState: function() {
		return{
			date: year,
			position: 'stop'
		}
	},
	back: function() {
		this.state.date -= 1,
		this.setState({
			date: this.state.date
		})
	},
	stop: function() {
		this.setState({
			date: this.state.date
		})
		clearInterval(this.past)
		clearInterval(this.future)
	},
	forward: function() {
		this.state.date += 1,
		this.setState({
			date: this.state.date
		})
	},
	backToThePast: function() {
		this.past = setInterval(this.back,250)
	},
	backToTheFuture: function() {
		this.future = setInterval(this.forward,250)

	},
	render: function() {
		return(
			<div className="pageContainer">
				<h1 className="year">{this.state.date}</h1>
				<div className="buttonContainer">
					<button className="reverse" onClick={this.backToThePast}>Travel Back</button>
					<button className="stop" onClick={this.stop}>Stop</button>
					<button className="forward" onClick={this.backToTheFuture}>Travel Forward</button>
				</div>
			</div>
		)
	}
})


var app = function() {
	ReactDOM.render(<PageLayout />, document.querySelector('.container'))
}


// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..