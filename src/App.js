import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import {
  Header,
  Container,
  Divider,
  Image,
  Menu,
  Segment,
  Flag,
  List
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="gradient-1">
          <div className="gradient-2">
            <div className="gradient-3">
              <header>
                <Image src="skate.jpg" fluid />
              </header>

              <Container text>
                <Menu>
                  <Menu.Item name="editorials">Editorials</Menu.Item>

                  <Menu.Item name="reviews">Reviews</Menu.Item>

                  <Menu.Item name="upcomingEvents">Upcoming Events</Menu.Item>
                </Menu>
                <Header as="h1">Self Piloting Skateboards</Header>
                <Divider />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque placerat, sapien non lacinia consequat, massa
                  justo dictum lorem, pharetra rutrum purus sapien eget nunc.
                  Proin ullamcorper euismod ex semper condimentum. Curabitur
                  mattis dapibus eros at fringilla. Curabitur quis tempus sem.
                  Mauris orci arcu, ultricies nec velit non, eleifend sagittis
                  nunc. Nam eget massa in magna commodo volutpat at nec felis.
                  Pellentesque sit amet semper justo, molestie pulvinar nunc.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Quisque gravida rhoncus ligula
                  nec ultrices. Vivamus sit amet porta nisi. Vivamus lectus
                  eros, iaculis non tellus at, finibus hendrerit felis.
                </p>
                <Header as="h2">The Daily Grind</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque placerat, sapien non lacinia consequat, massa
                  justo dictum lorem, pharetra rutrum purus sapien eget nunc.
                  Proin ullamcorper euismod ex semper condimentum. Curabitur
                  mattis dapibus eros at fringilla. Curabitur quis tempus sem.
                  Mauris orci arcu, ultricies nec velit non, eleifend sagittis
                  nunc. Nam eget massa in magna commodo volutpat at nec felis.
                  Pellentesque sit amet semper justo, molestie pulvinar nunc.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Quisque gravida rhoncus ligula
                  nec ultrices. Vivamus sit amet porta nisi. Vivamus lectus
                  eros, iaculis non tellus at, finibus hendrerit felis.
                </p>
                <Header as="h2">Ramping Up</Header>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque placerat, sapien non lacinia consequat, massa
                  justo dictum lorem, pharetra rutrum purus sapien eget nunc.
                  Proin ullamcorper euismod ex semper condimentum. Curabitur
                  mattis dapibus eros at fringilla. Curabitur quis tempus sem.
                  Mauris orci arcu, ultricies nec velit non, eleifend sagittis
                  nunc. Nam eget massa in magna commodo volutpat at nec felis.
                  Pellentesque sit amet semper justo, molestie pulvinar nunc.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Quisque gravida rhoncus ligula
                  nec ultrices. Vivamus sit amet porta nisi. Vivamus lectus
                  eros, iaculis non tellus at, finibus hendrerit felis.
                </p>
              </Container>
            </div>
          </div>
        </div>
        <footer>
        <Container textAlign='center'>
          {" "}
          <List>
            <List.Item>
              <List.Icon name="users" />
              <List.Content>Semantic UI</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>New York, NY</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="mail" />
              <List.Content>
                <a href="mailto:jack@semantic-ui.com">jack@semantic-ui.com</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="linkify" />
              <List.Content>
                <a href="http://www.semantic-ui.com">semantic-ui.com</a>
              </List.Content>
            </List.Item>
          </List>
          <Segment>
    <Flag name='ca' />
     </Segment>
          </Container>
        </footer>
      </div>
    );
  }
}

export default App;
