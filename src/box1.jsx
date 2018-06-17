import React from 'react';
import '../styles/index.scss';
import {Motion, spring} from '../node_modules/react-motion/build/react-motion';
import Tag from './tag.jsx';
import Link from './link.jsx'


export default class Box1 extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        move: false,
        tags: null,
        link: null,
      }
    }

    componentDidMount(){
      const cardList = this.props.content.tags.map((info) =>
          <Tag info={info} key={info}>
            </Tag>
      );
      if (this.props.content.link.length > 0){
          this.setState({move:true, tags: cardList, link: <Link link={this.props.content.link}/>})
      }
      else{
        this.setState({move:true, tags: cardList})
      }

    }
    createTagCaller(){
      console.log(this.props.content)
      const cardList = this.props.content.tags.map((info) =>
          <Tag info={info} key={info}>
            </Tag>
      );
      this.setState({tags:cardList})

    }
    clickHandler(){
      this.props.displayImageCaller(this.props.content.imageDetails, this.props.content.imageIndex)
    }

    render() {
      const style = {
        width: this.props.width + '%'
      }
        return (
            <div className="spacing" onMouseDown={this.clickHandler.bind(this)}>
              <div className="boxContent" style = {style}>
              {this.props.content.arrow ? <div className = "showMoreArrow" /> : null}
                <Motion style={{ x: spring(this.state.move ? 0 : -10), x1: spring(this.state.move ? 1 : 0) }}>
                    {value => {
                        return <h1 className="inlineShit" style ={{
                          WebkitTransform: `translate3d(0, ${value.x}px, 0)`,
                          transform: `translate3d(0, ${value.x}px, 0)`,
                          opacity: value.x1,
                        }}>
                          {this.props.content.Date} &nbsp;
                        </h1>
                    } }
                </Motion>
                <Motion style={{ x: spring(this.state.move ? 0 : -10), x1: spring(this.state.move ? 1 : 0)}}>
                    {value => {
                        return <div className="inlineShit titleBox" style ={{
                          WebkitTransform: `translate3d(${value.x}px, 0, 0)`,
                          transform: `translate3d(${value.x}px, 0 0)`,
                          opacity: value.x1,
                        }}>
                          {this.props.content.Title}
                          {this.state.link}
                        </div>
                    } }
                </Motion>

                <div className="pinkLine">
                  <Motion style={{ x: spring(this.state.move ? 0 : 100)}}>
                      {value => {
                          return <div className="line3" style ={{
                            WebkitTransform: `translate3d(0, ${value.x}%, 0)`,
                            transform: `translate3d(0, ${value.x}%, 0)`,
                          }}>
                            </div>
                      } }
                  </Motion>

                <div className="alignCenter">
                  <Motion style={{ x: spring(this.state.move ? 0 : -30), x1: spring(this.state.move ? 1 : 0)}}>
                      {value => {
                          return  <h2 style ={{
                            WebkitTransform: `translate3d(${value.x}px,0 , 0)`,
                            transform: `translate3d(${value.x}px, 0, 0)`,
                            opacity: value.x1,
                          }}>
                            {this.props.content.Employer}
                            </h2>
                      } }
                  </Motion>
                  <Motion style={{ x: spring(this.state.move ? 0 : -80), x1: spring(this.state.move ? 1 : 0)}}>
                      {value => {
                          return <div className="tags" style ={{
                            WebkitTransform: `translate3d(${value.x}px,0 , 0)`,
                            transform: `translate3d(${value.x}px, 0, 0)`,
                            opacity: value.x1,
                          }}>
                            {this.state.tags}
                            </div>
                      } }
                  </Motion>

                </div>
                <Motion style={{ x: spring(this.state.move ? 0 : -50)}}>
                    {value => {
                        return <p className="boxText" style ={{
                          WebkitTransform: `translate3d(${value.x}px,0 , 0)`,
                          transform: `translate3d(${value.x}px, 0, 0)`,
                          marginTop: '0'
                          // opacity: value.x1,
                        }}>
                          {this.props.content.Description}
                        </p>
                    } }
                    
                </Motion>

              </div>
              </div>

                <Motion style={{ x: spring(this.props.subHover ? this.props.minus : 700), y: spring(this.props.subHover ? 0 : 200), x1: spring(this.props.subHover ? this.props.minus : -677), x2: spring(this.props.subHover ? this.props.minus : -25+this.props.minus), y2: spring(this.props.subHover ? 0 : -200) }}>
                    {value => {
                        return <svg version="1.1" viewBox="0 0 650 150" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            style={{ enableBackground: "new 0 0 960 560" }}>
                            <line stroke="#333333" className="st0" x1="1" y1="3" x2= "630" y2="3"style={{
                                WebkitTransform: `translate3d(${value.x}px, 0, 0)`,
                                transform: `translate3d(${value.x}px, 0, 0)`,
                            }}>

                            </line>
                            <line stroke="#333333" className="st0" x1="630" y1="2" x2="612" y2="149"
                            style={{
                                 WebkitTransform: `translate3d(${value.x2}px, ${value.y}px, 0)`,
                                transform: `translate3d(${value.x2}px, ${value.y}px, 0)`,
                            }}/>
                            <line stroke="#333333" className="st0" x1="612" y1="148" x2="1" y2="148"style={{
                                WebkitTransform: `translate3d(${value.x1}px, 0, 0)`,
                                transform: `translate3d(${value.x1}px, 0, 0)`,
                            }}/>
                            <line stroke="#333333" className="st0" x1="1" y1="148" x2="1" y2="3"style={{
                                WebkitTransform: `translate3d(0, ${value.y2}px, 0)`,
                                transform: `translate3d(0, ${value.y2}px, 0)`,
                            }}/>
                         
                        </svg>
                    } }
                </Motion>
            </div >
        )
    }
}
