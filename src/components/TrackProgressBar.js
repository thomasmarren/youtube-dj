import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import setPosition from '../actions/setPosition'

class TrackProgressBar extends Component {

  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      x: 0
    }
  }

  componentDidUpdate(){
    let c = this.refs.myCanvas.getContext('2d');
    c.clearRect(0,0,500,100);
    // c.clearRect(0,0,500,100);
    let percentage = this.props.deck.status.position / this.props.deck.status.duration
    let progress = ((500 * percentage) - 500)
    // c.fillRect(0,0,progress,80)

    let image = this.refs.coverWaves
    c.drawImage(image,progress,0)
  }

  handleChange(event){
    let position = event.currentTarget.value
    this.props.setPosition(position, this.props.deck)
  }

  handleMouseMove(evt){
    let c = this.refs.myCanvas
    var canvas = c.getBoundingClientRect();
    var mousePos = { x: evt.clientX - canvas.left, y: evt.clientY - canvas.top}
    this.setState({x: mousePos.x})
  }

  handleClick(){
    let percentage = this.state.x / 500
    let position = this.props.deck.status.duration * percentage
    this.props.setPosition(position, this.props.deck)
  }

  render(){

    var percentage = this.props.deck.status.position / this.props.deck.status.duration

    return(
      <div>
        <canvas
          style={{"backgroundImage": "url('/images/waves.jpg')"}}
          ref="myCanvas"
          width="500"
          height="80"
          data-percentage={percentage}
          onMouseMove={this.handleMouseMove}
          onClick={this.handleClick}
        />
        <img ref="coverWaves" src="/images/cover-waves.png" style={{"display": "none"}}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setPosition }, dispatch)
}

export default connect(null, mapDispatchToProps)(TrackProgressBar);
