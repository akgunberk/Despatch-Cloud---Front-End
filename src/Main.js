import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import './Main.css';
import Sidebar from './Sidebar';


const Main = () => (
  <Grid>

    <Grid.Column id ="first">
      <Sidebar/>

    </Grid.Column>

    <Grid.Column id="second">
      <div>Berk</div>
    </Grid.Column>

    <Grid.Column id ="third">
        <div>Berk</div>
    </Grid.Column>
    
  </Grid>
)

export default Main;