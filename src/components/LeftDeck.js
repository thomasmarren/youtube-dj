import React from 'react';
import { connect } from 'react-redux';

function LeftDeck(props){

    let src=`https://www.youtube.com/embed/${props.leftDeck.track.id}`

    return(
      <div className="five columns">
        <div>
          <iframe src={src} />
        </div>
        <br />
        <h3>{props.leftDeck.track.title}</h3>
      </div>
    )

}

function mapStateToProps(state){
  return {leftDeck: state.leftDeck}
}

export default connect(mapStateToProps)(LeftDeck);
