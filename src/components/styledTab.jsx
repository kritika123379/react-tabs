import React, {Component} from 'react';
import {Tabs, DragTabList, DragTab, PanelList, Panel} from 'react-tabtab';
import {simpleSwitch} from 'react-tabtab/lib/helpers/move';
 
export default class Drag extends Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleTabSequenceChange = this.handleTabSequenceChange.bind(this);
    this.state = {
      activeIndex: 0,
    }
  }
 
  handleTabChange(index) {
    this.setState({activeIndex: index});
  }
 
  handleTabSequenceChange({oldIndex, newIndex}) {
    const {tabs} = this.state;
    const updateTabs = simpleSwitch(tabs, oldIndex, newIndex);
    this.setState({tabs: updateTabs, activeIndex: newIndex});
  }
 
  render() {
    const {activeIndex} = this.state;
    return (
      <Tabs activeIndex={activeIndex}
            onTabChange={this.handleTabChange}
            onTabSequenceChange={this.handleTabSequenceChange}>
        <DragTabList>
          <DragTab>DragTab1</DragTab>
          <DragTab>DragTab2</DragTab>
        </DragTabList>
        <PanelList>
          <Panel>Content1</Panel>
          <Panel>Content2</Panel>
        </PanelList>
      </Tabs>
    )
  }
}