import React from 'react'
import { Header, Grid, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Side from './Side';
import Tickets from './Tickets';
import Priority from './Priority';
import Tags from './Tags';

export default class SidebarExampleDimmed extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible:false,
        }
        this.setVisible = this.setVisible.bind(this)
    }

    setVisible = (c) => ( this.setState({visible:c}) )

    render ()  {
  return (
            <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => this.setVisible(true)}
                direction= 'right'
                vertical
                visible={this.state.visible}
                width='thin'
            >

                <button onClick={() => this.setState({ visible : !this.state.visible })}>
                        Click me
                </button>
                <Grid.Column id ="first" > {/* Left Side Bar which employs mainly ticket types, priorities and tags */}
                    <Side/>
                    <Tickets/>
                    <Priority/>
                    <Tags/>
                </Grid.Column>

            </Sidebar>

            <Sidebar.Pusher dimmed={true}>
                <Segment basic>
                <Header as='h3'>Application Content</Header>
                <Image src='/images/wireframe/paragraph.png' />
                </Segment>
            </Sidebar.Pusher>
            </Sidebar.Pushable>
  )
}
}

