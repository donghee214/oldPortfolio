import React from 'react';
import {Motion, spring} from '../node_modules/react-motion/build/react-motion';



export default class CenterLine extends React.Component {
    callLoadColor() {
        if (this.props.lineShow == true) {
            this.props.loadColor();
        }
    }
    render() {
        return (
            <Motion style={{ y: spring(this.props.lineShow ? 0 : 100, { stiffness: 225, damping: 30 }) }} onRest={this.callLoadColor.bind(this) }>
                {value => {
                    return <div className="name"style={{
                        WebkitTransform: `translate3d(${value.y}%, 0, 0)`,
                        transform: `translate3d(${value.y}%, 0, 0)`,
                        width: '100%',
                        height: '1.5px',
                        backgroundColor: 'black',
                        position: 'absolute',
                        bottom: '10%',
                    }}></div>
                } }
            </Motion>
        )
    }
}