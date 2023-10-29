import React from "react";
import { Container, Message, Icon } from "semantic-ui-react";

const Loader = ({ title, message }) => (
  <Container>
    <Message className="bg-color" icon size="big">
      <Icon name="circle notched" loading color="green" />
      <Message.Content className="text-white">
        <Message.Header>
          {title ? title : "Just one second"}
        </Message.Header>
        {message ? message : "We are fetching that content for you."}
      </Message.Content>
    </Message>
  </Container>
);

export default Loader;
