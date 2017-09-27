import React from 'react';
import '../styles/index.scss';

export default class Tag extends React.Component {
    render() {
        return (
            <div className = "label">
                {this.props.info}
                <div className= "circle"/>
            </div>
        )
    }
}
