import React from 'react';
import '../styles/index.scss';
import {Motion, spring, TransitionMotion} from '../node_modules/react-motion/build/react-motion';
import Exit from './exit.jsx';

export default class AdditionalInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pStuff: null
    }
  }
    
    willEnter() {
      return {
        opacity:0, transform: -5
      }
    }
    willLeave() {
      return {
        opacity: spring(0), transform: spring(-5)
      }
    }
  componentDidMount(){
    const cardList = this.props.content.map((info) =>
            <p className="rightText" key={info}>
              {info[0]}
              {info[1]}
            </p> )
    this.setState({pStuff:cardList}) 
  }
    render() {
      {
    return (
      <TransitionMotion
        styles={this.props.doUnmount ? [{
          key: 'child',
          data: {},
          style: {opacity: spring(1), transform: spring(0)}
        }] : []}
        willEnter={this.willEnter}
        willLeave={this.willLeave}>
          {(items) => {
            return (
              <div className="inherit">
                {items.map(item => {
                  return (
                    <div key={item.key} className="additionalInfo" style ={{
                    opacity:item.style.opacity,
                    transform: 'translate3d(' + item.style.transform + 'vh, 0, 0)'
                  }}>
                  <Exit css={"exit2"} click={this.props.exit1}/>
                  {this.state.pStuff}
                  <div className={this.props.backgroundText}>
                  </div>
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
