import React from 'react';
import '../styles/index.scss';
import {Motion, spring, TransitionMotion} from '../node_modules/react-motion/build/react-motion';


export default class SideBackdrop extends React.Component {
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
        styles={this.props.doUnmount ? [{
          key: 'child',
          data: {},
          style: {transform: spring(0)}
        }] : []}
        willEnter={this.willEnter}
        willLeave={this.willLeave}>
          {(items) => {
            return (
              <div>
                {items.map(item => {
                  return (
                    <div key={item.key} className="sidebackdrop" style ={{
                    transform: 'translate3d('+ item.style.transform + 'vw, 0, 0)'
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
