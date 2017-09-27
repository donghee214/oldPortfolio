import React from 'react';
import '../styles/index.scss';
import {Motion, spring} from '../node_modules/react-motion/build/react-motion';



export default class Divider extends React.Component {
    render() {
        return (
            <Motion onRest={() => {this.props.showInstruction()}}style={{ x: spring(this.props.moveDivider ? -8 : 11), y: spring(this.props.moveDivider ? 0 : -150) }}>
                {value => {
                    return <div className="divider" style={{
                        WebkitTransform: `translate3d(${value.x}vw, ${value.y}vw, 0) rotate(7.5deg)`,
                        transform: `translate3d(${value.x}vw, ${value.y}vw, 0) rotate(7.5deg)`,
                    }}>
                    </div>
                } }
            </Motion>
        )
    }
}
