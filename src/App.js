import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import { APP_TOKEN } from './secrets'

import Results from './Results'
import Search from './Search'

const Main = styled.main`
  display: inline-flex;
  flex-direction: column;
  width: auto;
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

const Title = styled.h1`
  font-family: "Changa", sans-serif;
  font-size: 4rem;
  font-weight: 500;
  margin-bottom: 0;
  span {
    color: ${props => props.theme.color.fg};
  }
`

const Wrapper = styled.div`
  background-color: ${props => props.theme.color.bg};
  box-sizing: border-box;
  color: ${props => props.theme.color.body};
  display: flex;
  flex-direction: column;
  font-family: "Cairo", sans-serif;
  font-size: 16px;
  font-weight: 300;
  min-height: 100vh;
  padding: 2rem;
  width: 100vw;
  @media screen and (min-width: 600px){
    font-size: 18px;
  }
`

class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      useNightTheme: false
    }

    this.toggleTheme = this.toggleTheme.bind(this)
  }

  toggleTheme(){
    this.setState({useNightTheme: !this.state.useNightTheme})
  }

  componentDidMount(){
    const URL = `https://data.nasa.gov/resource/gh4g-9sfh.json?$$app_token=${APP_TOKEN}&$limit=${10}`
    fetch(URL, {
      mode: 'cors'
    })
    .then(
      
    )
  }

  render(){
    return (
      <ThemeProvider theme={this.state.useNightTheme ? theme.night : theme.day}>
        <Wrapper>
          <header>
            <Title>mete<span>o</span>rita</Title>
            <ThemeToggle onClick={this.toggleTheme}>Toggle theme</ThemeToggle>
          </header>
          <Main>
            <Search/>
            <Results/>
          </Main>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App;
