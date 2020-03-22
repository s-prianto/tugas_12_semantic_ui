import React,{Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Container, Segment, Grid, Header, Image, Form, Input, Checkbox, Button} from "semantic-ui-react";

const style = {
  logo:{
    padding:"8em 0 2em 0",
  },
  lastSegment:{
    backgroundColor:"#F8F8F9",
  }
}

class App extends Component{
  render(){
    return(
      <div>
        <Container textAlign="center" style={style.logo}>
          <Header as="h2" color="teal">
            <Image src="https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png" /> Member Login
          </Header>
        </Container>
        <Container>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <Segment>
                  <Form>
                    <Form.Field>
                      <Input icon="user" iconPosition="left" placeholder="E-mail address"/>
                    </Form.Field>
                    <Form.Field>
                      <Input icon="lock" iconPosition="left" placeholder="Password"/>
                    </Form.Field>
                    <Form.Field>
                      <Checkbox label="I agree to the Terms and Conditions"/>
                    </Form.Field>
                    <Button fluid color="teal" type="submit">Login</Button>
                    <br/>
                  </Form>
                </Segment>
                <Segment style={style.lastSegment}>
                  <p >Tidak Punya Akun? Silahkan <a href="https://www.niomic.com">Register</a></p>
                </Segment>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default App;
