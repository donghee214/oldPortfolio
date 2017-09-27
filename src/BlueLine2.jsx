import React from 'react';
import '../styles/index.scss';
import {Motion, spring} from '../node_modules/react-motion/build/react-motion';

export default class Blue extends React.Component {
    render() {
        return (
          <Motion style={{ x: spring(this.props.moveDivider ? 0 : 100)}}>
              {value => {
                  return <div className={ this.props.isActive ? 'line2 line--active': 'line2'} style ={{
                    WebkitTransform: `translate3d(0, ${value.x}%, 0)`,
                    transform: `translate3d(0, ${value.x}%, 0)`,
                  }}>
                </div>
              } }
          </Motion>
        )
    }
}
