import React from 'react';
import '../styles/index.scss';


export default class landing extends React.Component {

    render() {
        return (
            <div className="landingText">
                <ul>
                    <li className="overlap animate1">PAGE</li>
                    <li className="overlap animate2">IS</li>
                    <li className="overlap animate3">LOADING</li>
                    <li className="overlap animate4">PAGE</li>
                    <li className="overlap animate5">IS</li>
                </ul>
            </div>
        )
    }
}
