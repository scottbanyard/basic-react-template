import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  text-align: center;
`;

export const App = () => (
  <div>
    <Container>
      <Title>Welcome to this basic React template!</Title>
    </Container>
  </div>
);
