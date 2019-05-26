import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'

import Pagination from './Pagination'
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
      data: [],
      limit: 10,
      loading: true,
      offset: 0,
      resultsFound: 0,
      useNightTheme: false
    }

    this.handlePageClick = this.handlePageClick.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)

  }

  fetchData(){
    const URL = `https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name&$limit=${this.state.limit}&$offset=${this.state.offset}`

    fetch(URL, {
      headers: {
        'Content-type': 'application/json'
      },
      mode: 'cors'
    })
    .then(
      response => response.json()
    )
    .then (
      data => {
        console.log(data)
        this.setState({data: data, loading: false})
      }
    )
  }

  fetchTotalData(){
    const URL = `https://data.nasa.gov/resource/gh4g-9sfh.json?$select=id&$limit=50000`

    fetch(URL, {
      headers: {
        'Content-type': 'application/json'
      },
      mode: 'cors'
    })
    .then(
      response => response.json()
    )
    .then (
      data => {
        console.log(data.length + ' results found')
        this.setState({resultsFound: data.length})
      }
    )
  }

  handlePageClick(to){
    let nextOffset
    if(to === "next"){
      nextOffset = this.state.offset + this.state.limit
    } else if(to === "prev"){
      nextOffset = this.state.offset - this.state.limit
    }
    this.setState({offset: nextOffset}, this.fetchData)
  }

  toggleTheme(){
    this.setState({useNightTheme: !this.state.useNightTheme})
  }

  componentDidMount(){
    this.fetchData()
    this.fetchTotalData()
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
            <p>{this.state.loading ? `Loading...` : `Viewing ${this.state.offset+1}-${this.state.offset+this.state.limit} of ${this.state.resultsFound} results found.`}</p>
            <Results loading={this.state.loading} data={this.state.data}/>
            <Pagination handlePageClick={this.handlePageClick} resultsFound={this.state.resultsFound}/>
          </Main>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App;
