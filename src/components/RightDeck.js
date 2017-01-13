import React from 'react';
import { connect } from 'react-redux';

function RightDeck(props){

    let src=`https://www.youtube.com/embed/${props.rightDeck.track.id}`

    return(
      <div className="five columns">
        <div>
          <iframe src={src} />
        </div>
        <br />
        <h3>{props.rightDeck.track.title}</h3>
      </div>
    )

}

function mapStateToProps(state){
  return {rightDeck: state.rightDeck}
}

export default connect(mapStateToProps)(RightDeck);
