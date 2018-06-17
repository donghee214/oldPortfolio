import React from 'react';
import '../styles/index.scss';
import {Motion, spring, TransitionMotion} from '../node_modules/react-motion/build/react-motion';


export default class BottomBackdrop extends React.Component {
    willEnter() {
      return {
        transform: 20
      }
    }
    willLeave() {
      return {
        transform: spring(20)
      }
    }
    render() {
      {
    return (
      <TransitionMotion
        styles={this.props.doUnmount ? [] : [{
          key: 'child',
          data: {},
          style: {transform: spring(0)}
        }]}
        willEnter={this.willEnter}
        willLeave={this.willLeave}>
          {(items) => {
            return (
              <div className="backContainer">
                {items.map(item => {
                  return (
                    <div key={item.key} className="backdrop" style ={{
                    transform: 'translate3d(0,' + item.style.transform + 'vh, 0)'
                  }}>
                    </div>
                  );
                })}
                
              </div>
            )
          }}
      </TransitionMotion>
    )
  }
}
}
