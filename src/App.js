import React from 'react';
import styled from 'styled-components';
import Alert from './components/Alert';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
`

const App = () => {
  return (
    <StyledWrapper>
        <Alert type="success" header="Basic alert title" caption="This is a message that displays a brief important message to the user."/>

        <Alert type="warning" header="Basic alert title" caption="This is a message that displays a brief important message to the user."/>

        <Alert type="error" header="Basic alert title" caption="This is a message that displays a brief important message to the user."/>

        <Alert type="info" header="Basic alert title" caption="This is a message that displays a brief important message to the user."/>
    </StyledWrapper>
  );
}

export default App;
