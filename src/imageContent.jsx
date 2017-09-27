import React from 'react';
import '../styles/index.scss';
import {Motion, spring} from '../node_modules/react-motion/build/react-motion';
import BottomBackdrop from './Backdrop.jsx'
import ActualImage from './actualImage.jsx'
import SideBackdrop from './SideBackdrop.jsx'
import AdditionalInfo from './AdditionalInfo.jsx'


export default class ImageContent extends React.Component {
constructor(props){
    super(props);
    this.titleChange = this.titleChange.bind(this)
    this.state = {
      flipped: false,
      mouseOver: false,
      css: 'picTitle',
      translateLeft: 'img-responsive',
      moveInfo: ' image1LeftBefore',
      renderChild: true,
    }
  }

  componentDidMount(){
    this.setState({renderChild: false})
  }

    titleChange(){
        this.setState({css:'rotate',flipped: true, renderChild: !this.state.renderChild})
        window.removeEventListener('onScroll', this.titleChange);
        var dots = document.getElementsByClassName("slick-dots")
        dots[0].style.visibility='visible'
        this.titleChange = null
    }

    onImageLoad(){
      this.setState({translateLeft: 'image1'})
      document.getElementById("scene-wrapper").style.visibility='hidden'
    }

    onHover(){
      this.props.opaqueCaller()
      this.setState({moveInfo: ' image1Left', mouseOver: true})
    }

    exit1(){
      this.props.opaqueCaller()
      this.setState({moveInfo: '', mouseOver: false})
    }

    render() {
        return (
               <div id="uno" ref={(ref) => this.myRef = ref} className='image' onScroll={this.titleChange}>
                  <BottomBackdrop onScroll={this.toggle} doUnmount={this.state.renderChild}/>
                  <SideBackdrop onScroll={this.toggle} doUnmount={this.state.flipped}/>
                  <AdditionalInfo exit1={this.exit1.bind(this)} backgroundText={this.props.backgroundText} opaque={this.props.opaque} content={this.props.content[4]} doUnmount={this.state.mouseOver} flipped = {this.state.flipped}/>
                  <div className={this.state.css}>
                    {this.props.content[0]}<span className="thicc">{this.props.content[1]}</span>
                    <div className="learn">
                      <div>{this.props.content[2]} {this.props.content[3]}<br/> <p onClick={this.onHover.bind(this)}className="dets">DETAILS</p></div>          
                    </div>
                  </div>
                  <img className={this.state.translateLeft + this.state.moveInfo} src={this.props.image} onLoad={this.onImageLoad.bind(this)} alt="boohoo"/>
                </div>
        )
    }
}
