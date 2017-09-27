import React from 'react';
import '../styles/index.scss';
import Box1 from './box1.jsx';
import Instruction from './instructions.jsx'

// import Box2 from './box2.jsx';
// import Box3 from './box3.jsx';
// import Box4 from './box4.jsx';
// import Box5 from './box5.jsx';


export default class LeftInfo extends React.Component {
    render() {
        return (
            <div className="box1">
             <Instruction showInstruction={this.props.showInstruction}/> 
              <div className="omg">
                {this.props.boxes}
               </div>
            </div>
        )
    }
}
