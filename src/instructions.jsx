import React from 'react';
import '../styles/index.scss';
import {Motion, spring, TransitionMotion} from '../node_modules/react-motion/build/react-motion';

// import Box2 from './box2.jsx';
// import Box3 from './box3.jsx';
// import Box4 from './box4.jsx';
// import Box5 from './box5.jsx';


export default class Instructions extends React.Component {
    willEnter() {
      return {
        transform: -20
      }
    }
    willLeave() {
      return {
        transform: spring(-20)
      }
    }
    render() {
      {
    return (
      <TransitionMotion
        styles={this.props.showInstruction ? [{
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
                    <div className="instruction" key={item.key} style ={{
                    transform: 'translate3d(0,' + item.style.transform + 'vh, 0)'
                  }}>
                  CHOOSE A TAB FROM THE RIGHT
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
