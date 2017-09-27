import React from 'react';
import '../styles/index.scss';
import TabOption from './TabOption.jsx'

export default class TopNav extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        names: [{
                 "name": "Experience",
                 "id": 1
                }, 
                {
                  "name": "Hackathons",
                  "id":2,
                }, 
                {"name": "Projects",
                 "id":3
              }],
        selectedTabId: null,
    }
  }
    isActive(id){
      return this.state.selectedTabId === id
    }

    setActiveTab(selectedTabId){
      this.setState({selectedTabId: selectedTabId})
    }



     render() {
        var cardList = null
        cardList = this.state.names.map((info) =>
          <TabOption isActive={ this.isActive(info.id) } 
              onActiveTab={ this.setActiveTab.bind(this, info.id) }
              names={info.name} key={info.id} moveDivider={this.props.moveDivider} 
              click={this.props.click} onReleaseHover={this.props.onReleaseHover}
              onHover={this.props.onHover}/>
      );
        return (
          <ul className="topNav">
            {cardList}
          </ul>
        )
    }
}
