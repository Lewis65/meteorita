import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'

import Results from './Results'
import Search from './Search'

const Main = styled.main`
  display: flex;
  flex-direction: column;
`

const ThemeToggle = styled.button`
  background-color: ${props => props.theme.color.bg2};
  border: 0;
  color: ${props => props.theme.color.body};
  padding: 1rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
`

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.bg};
  box-sizing: border-box;
  color: ${props => props.theme.color.body};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2rem;
  width: 100vw;
  h1, h2 {
    font-family: "Changa", sans-serif;
    font-size: 4rem;
    font-weight: 500;
  }
  * {
    font-family: "Cairo", sans-serif;
    font-size: 1.05rem;
    font-weight: 300;
  }
`

function App(){

  const [useNight, setUseNight] = useState(false)

  return (
    <ThemeProvider theme={useNight ? theme.night : theme.day}>
      <Wrapper>
        <header>
          <h1>meteorita</h1>
          <ThemeToggle onClick={() => setUseNight(!useNight)}>Toggle theme</ThemeToggle>
        </header>
        <Main>
          <Search/>
          <Results/>
        </Main>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App;
