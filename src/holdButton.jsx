import React from 'react';
import '../styles/index.scss';

export default class holdButton extends React.Component {
    render() {
        return (
          <div className="holdButton" onMouseDown={this.props.mouseMoveHandler.bind(this) } onMouseUp={this.props.mouseUpHandler.bind(this) }>
          	Hold Down
          </div>
        )
    }
}
