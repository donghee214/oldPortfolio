import React from 'react';
import '../styles/index.scss';
import {Motion, spring} from '../node_modules/react-motion/build/react-motion';

export default class Navname extends React.Component {
    render() {
        return (
          <Motion style={{ x: spring(this.props.moveDivider ? 0 : 20), x1: spring(this.props.moveDivider ? 1 : 0)}}>
              {value => {
                  return <div  className={ this.props.isActive ? 'nav navigation--active': 'nav'} style ={{
                    WebkitTransform: `translate3d(${value.x}%, 0, 0)`,
                    transform: `translate3d(${value.x}%, 0, 0)`,
                    opacity: value.x1,
                  }}>
                  {this.props.names}
                </div>
              } }
          </Motion>
        )
    }
}
