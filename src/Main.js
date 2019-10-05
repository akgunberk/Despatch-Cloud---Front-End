import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Navbar from './Navbar';

const Main = () => (
  <Grid columns='equal'>
    <Grid.Column>
      <Segment>
            <Navbar/>
      </Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>
      <div>Berk</div>
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
          <div>Berk</div>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default Main;