import React, {Component} from 'react';
import {Tabs, TabList, Tab, PanelList, Panel} from 'react-tabtab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle,faPoundSign,faPortrait} from '@fortawesome/free-solid-svg-icons'

export default class Basic extends Component {
  render() {
    return (
      <Tabs customStyle={this.props.customStyle}>
        <TabList>
          <Tab>
          <FontAwesomeIcon icon={faPlusCircle} />
            High!
          </Tab>
          <Tab>
           <FontAwesomeIcon icon={faPortrait} />Hii
          </Tab>
          <Tab>
          <FontAwesomeIcon icon={faPoundSign} />
          </Tab>
        </TabList>
        <PanelList>
          <Panel>
            Accusamus enim nisi itaque voluptas nesciunt repudiandae velit. <br/>
            Ad molestiae magni quidem saepe et quia voluptatibus minima. <br/>
            Omnis autem distinctio tempore. Qui omnis eum illum adipisci ab.
          </Panel>
          <Panel>
            Officiis commodi facilis optio eum aliquam.<br/>
            Tempore libero sit est architecto voluptate. Harum dolor modi deleniti animi qui similique facilis. Sit delectus voluptatem praesentium recusandae neque quo quod.
          </Panel>
          <Panel>
            Ut voluptas a voluptas quo ut dolorum.<br/>
            Dolorem sint velit explicabo sunt distinctio dolorem adipisci tempore.<br/>
            Est repellat quis magnam quo nihil amet et. Iste consequatur architecto quam neque suscipit.
          </Panel>
        </PanelList>
      </Tabs>
    )
  }
}