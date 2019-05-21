import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'

import Results from './Results'
import Search from './Search'

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.bg};
  box-sizing: border-box;
  color: ${props => props.theme.color.body};
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

function App(){

  const [useNight, setUseNight] = useState(false)

  return (
    <ThemeProvider theme={useNight ? theme.night : theme.day}>
      <Wrapper>
        <header>
          <h1>meteorita</h1>
          <button onClick={() => setUseNight(!useNight)}>Toggle theme</button>
        </header>
        <main>
          <Search/>
          <Results/>
        </main>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App;
