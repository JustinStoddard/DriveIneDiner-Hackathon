import React, { Component } from 'react';
import { Header, Image, Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          Sorry, we can not find your page! Here is a link back
          <Link to='/'> Home</Link>
        </Header>
        <Segment>
          <Image src="https://s3.envato.com/files/227378456/590.jpg" huge centered/>
        </Segment>
      </div>
    );
  }
}

export default NoMatch;
