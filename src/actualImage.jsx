import React from 'react';
import '../styles/index.scss';
import {Motion, spring} from '../node_modules/react-motion/build/react-motion';

export default class ActualImage extends React.Component {
    translate(){
        this.props.onImageLoad()
    }
    render() {
        return (
              <img src={this.props.image} onLoad={this.translate.bind(this)} alt="boohoo" className="img-responsive"/>
        )
    }
}
