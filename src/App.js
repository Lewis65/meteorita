import React from 'react';
import styled from 'styled-components'

import Results from './Results'
import Search from './Search'

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  width: 100vw;
  * {
    margin: 0;
    padding: 0;
  }
`

const App = () => (
  <Wrapper>
    <header>
      <h1>Meteorita</h1>
    </header>
    <main>
      <Search/>
      <Results/>
    </main>
  </Wrapper>
)

export default App;
