import React from 'react';
import {Sidebar, SidebarPushable, Menu} from 'semantic-ui-react';


function Sol() {
    var visible = true

    var setVisible = (boo) => {visible = boo }
    
    return (
        <SidebarPushable>
            <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => setVisible(true)}
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item as='a'>
                    Home
                </Menu.Item>
                <Menu.Item as='a'>
                     Games
                </Menu.Item>

            </Sidebar>

        </SidebarPushable>
   
    );
  }
  
  export default Sol;