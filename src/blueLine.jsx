import React from 'react';
import '../styles/index.scss';
import {Motion, spring} from '../node_modules/react-motion/build/react-motion';

export default class Blue extends React.Component {
    render() {
        return (
          <Motion style={{ x: spring(this.props.nameShow || this.props.moveDivider ? 0 : 100)}}>
              {value => {
                  return <div className="line" style ={{
                    WebkitTransform: `translate3d(0, ${value.x}%, 0)`,
                    transform: `translate3d(0, ${value.x}%, 0)`,
                  }}>
                </div>
              } }
          </Motion>
        )
    }
}
