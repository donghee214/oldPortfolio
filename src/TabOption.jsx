import React from 'react';
import '../styles/index.scss';
import BlueLine from './BlueLine2.jsx';
import Navname from './NavName.jsx'


export default class TabOption extends React.Component {
	clicked(name){
		this.props.onActiveTab()
		this.props.click(name)
	}
    render() {
        return (
            <li onClick ={()=>{this.clicked(this.props.names)}}
             onMouseLeave={()=>{this.props.onReleaseHover()}} 
             onMouseOver={() => { this.props.onHover()}}>
              <Navname isActive={this.props.isActive} moveDivider={this.props.moveDivider} names={this.props.names}/>
              <BlueLine isActive={this.props.isActive} moveDivider={this.props.moveDivider}/>
            </li>
        )
    }
}
