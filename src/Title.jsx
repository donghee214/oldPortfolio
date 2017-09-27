import React from 'react';
import '../styles/index.scss';
import TypeWriter from '../node_modules/react-typewriter/build/react-typewriter.js';
import BlueLine from './blueLine.jsx'



export default class Title extends React.Component {
    // disableClick(){
    //   $("body").off("mouseup");
    //   $("body").off("mousedown");
    //   $(".damnit").off("click");
    // }

    componentDidMount(){
      this.x = document.getElementsByTagName('canvas')
    }
    update() {
      if (this.props.moveDivider === false){
        app.tl2.restart().pause();
        TweenLite.to(camera.position, 1.6, {
            z: 6500,
            ease: Elastic.easeOut.config(1.4, 1),
        });
        this.props.moveDividerCalled();
        $("body").off("mouseup");
        $("body").off("mousedown");
        $(".damnit").off("click");
        this.x[0].className += " animateResize";
        return
      }
      else{
        return
      }
    }
    render() {
        return (
          <div className="damnit">
            <TypeWriter onTypingEnd={this.update.bind(this) } minDelay={75} maxDelay={75} className="name" typing={this.props.nameShow}>
                <ul className="abs">
                    <li>Daniel Kim<br /></li>
                    <li id="dev" className="code"><code>&#60;Developer/></code><br /></li>
                    <li id="design" className="code"><code>&#60;Designer/></code><br /></li>
                </ul>
            </TypeWriter>
            <BlueLine moveDivider={this.props.moveDivider} nameShow={this.props.nameShow} />
            </div>
            //     {value => {
            //         return <div className="line" style={{
            //           WebkitTransform: `translate3d(${value.x}px, 0, 0)`,
            //           transform: `translate3d(${value.x}px, 0, 0)`,
            //         }}>
            //         </div>
            //     } }
            // </Motion>

        )
    }
}
