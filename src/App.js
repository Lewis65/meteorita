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
      limit: 100000,
      loading: true,
      offset: 0,
      resultsFound: 0,
      resultsPerPage: 10,
      searchBox: '',
      searchTerm: '',
      useNightTheme: false
    }

    this.handlePageClick = this.handlePageClick.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.toggleTheme = this.toggleTheme.bind(this)

  }

  fetchData(){
    const URL = `https://data.nasa.gov/resource/gh4g-9sfh.json?$order=name&$limit=${this.state.limit}&$where=UPPER(name)%20like'%25${this.state.searchTerm.toUpperCase()}%25'`

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
        this.setState({
          data: data,
          loading: false,
          resultsFound: data.length
        })
      }
    )
  }

  handlePageClick(to){
    let nextOffset
    if(to === "next"){
      nextOffset = this.state.offset + this.state.resultsPerPage
    } else if(to === "prev"){
      nextOffset = this.state.offset - this.state.resultsPerPage
    }
    this.setState({offset: nextOffset})
  }

  handleSearchChange(val){
    this.setState({searchBox: val})
  }

  handleSearchClick(){
    this.setState({
      loading: true,
      offset: 0,
      searchTerm: this.state.searchBox
    }, () => {
      this.fetchData()
    })
  }

  toggleTheme(){
    this.setState({useNightTheme: !this.state.useNightTheme})
  }

  componentDidMount(){
    this.fetchData()
  }

  render(){

    let enableNextButton = false
    let enablePrevButton = false
    let numberOfResultsOnPage = 0
    let dataToDisplay = []

    if(this.state.offset > 0){
      enablePrevButton = true
    }

    //If data has been fetched
    if(this.state.resultsFound){

      //If this is the last page
      if(this.state.offset + this.state.resultsPerPage >= this.state.resultsFound){
        //Set the number of results on page appropriately for slicing data and displaying results #s
        numberOfResultsOnPage = this.state.resultsFound-this.state.offset
      } else {
        //Else display max results per page and enable next button
        numberOfResultsOnPage = this.state.resultsPerPage
        enableNextButton = true
      }

      //Slice total data array to the results for this page
      dataToDisplay = this.state.data.slice(this.state.offset, this.state.offset + numberOfResultsOnPage)
    }

    return (
      <ThemeProvider theme={this.state.useNightTheme ? theme.night : theme.day}>
        <Wrapper>
          <header>
            <Title>mete<span>o</span>rita</Title>
            <ThemeToggle onClick={this.toggleTheme}>Toggle theme</ThemeToggle>
          </header>
          <Main>
            <Search handleSearchChange={this.handleSearchChange} handleSearchClick={this.handleSearchClick} searchBox={this.state.searchBox}/>
            <p>{this.state.loading ? `Loading...` : `Viewing ${this.state.resultsFound ? this.state.offset+1 : 0}-${this.state.offset+numberOfResultsOnPage} of ${this.state.resultsFound} results found.`}</p>
            <Results loading={this.state.loading} data={dataToDisplay}/>
            <Pagination enableNextButton={enableNextButton} enablePrevButton={enablePrevButton} handlePageClick={this.handlePageClick} resultsFound={this.state.resultsFound}/>
          </Main>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App;
