import React from 'react';
import '../styles/index.scss';
import { findDOMNode } from 'react-dom'
import Slider from 'react-slick';
import BottomBackdrop from './Backdrop.jsx'
import ActualImage from './actualImage.jsx'
import SideBackdrop from './SideBackdrop.jsx'
import AdditionalInfo from './AdditionalInfo.jsx'
import ImageContent from './imageContent.jsx'
import Exit from './exit.jsx'

// import Box2 from './box2.jsx';
// import Box3 from './box3.jsx';
// import Box4 from './box4.jsx';
// import Box5 from './box5.jsx';


export default class ImageContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      opaque: false,
      backgroundText: 'backgroundText',
    }
  }

    opaqueCaller(){
      this.setState({opaque: !this.state.opaque})
    }

    // exit(){
    //   document.getElementById("scene-wrapper").style.visibility='visible'
    //   this.props.unMountImage()
    // }

    // exit1(){
    //   this.setState({opaque: false, backgroundText:'backgroundText'})
    // }


    exit(){
      // if(this.state.opaque){
      //   this.setState({opaque: false, backgroundText:'backgroundText'})
      // }
      // else{
          document.getElementById("scene-wrapper").style.visibility='visible'
          this.props.unMountImage()
      // }
    }

    // CreateBoxes(count){
    //     return (<div>
    //                <ImageContent backgroundText={this.state.backgroundText} opaque={this.state.opaque} opaqueCaller={this.opaqueCaller.bind(this)} image={this.props.content[1][count]} content={this.props.content[0]}/>
    //             </div>);
    // }

    BoxFactory(){
    const cardList = this.props.content[1].map((info) =>
        <div key={info}>
            <ImageContent backgroundText={this.state.backgroundText} opaque={this.state.opaque} opaqueCaller={this.opaqueCaller.bind(this)} image={info} content={this.props.content[0]}/>
    </div>)   ;
    return cardList
      // var arry = []
      // for (var count = 0; count < this.props.content[1].length; count++){
      //   arry.push(this.CreateBoxes(count))
      // }
      // return arry
    }




    render() {
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
      };
        return (<div className="ImageContainer">
            
              {this.state.opaque ? null : <Exit click={this.exit.bind(this)} css={"exit"}/>}
              <Slider className="imageBox" {...settings}>
                {this.BoxFactory()}
              </Slider>

            </div>
        )
    }
}
