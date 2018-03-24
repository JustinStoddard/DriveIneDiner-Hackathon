import React, { Component } from 'react';
import { 
  Header,
  Segment,
  Container,
  Embed
  } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div>
        <br />
        <Header as='h1' textAlign='center'>About</Header>
        <br />
        <Container>
          <Segment>
            <Header as='h4' textAlign='center'>
            We're a small Chinese restaurant with over 20 years of experience between food and service. We're confident you'll love our food, so come in and try it! 
            <br />
            <br/>
            Can't come in? We deliver and cater!
            </Header>
            <Header as='h3'>Business Hours</Header>
            Open Monday to Saturday, 11 AM to 10 PM.
            <br />
            Closed Sundays.
            <Header as='h3' >Location </Header>
            1331 E 3900 S Salt Lake City, Utah 84124
              <Segment>
                <Embed
                  aspectRatio='21:9'
                  autoplay = {true}
                  url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6975.304065536179!2d-111.8551725151177!3d40.68668399458576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875261ded0bb195b%3A0x20ea642e49e8b9a2!2sDragon+Diner!5e0!3m2!1sen!2sus!4v1521912328908"
                />
              </Segment>
            <Header as='h3' >Contact Information</Header>
            801.272.9333 (phone)
            <br />
            801.272.0470 (fax)
            <br />
            dragondiner@gmail.com
          </Segment>
        </Container>
      </div>
    );
  }
}

export default About;
