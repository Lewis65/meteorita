import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.theme.color.fg};
    border: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: ${props => props.theme.color.body};
    cursor: pointer;
    flex: 0;
    font-size: 1em;
    outline: 0;
    padding: 1rem;
    text-align: center;
    width: 100%;
    i {
        display: inline-block;
    }
    span {
        display: none;
    }
    @media screen and (min-width: 600px){
        display: inline-block;
        flex: 0.1 0;
        min-width: 150px;
        span {
            display: inline-block
        }
        i {
            margin-right: 0.5rem;
        }
    }
`

const Searchbar = styled.input`
    background-color: ${props => props.theme.color.bg2};
    border: 0;
    box-sizing: border-box;
    color: ${props => props.theme.color.body};
    display: inline-block;
    flex: 1;
    font-size: 1em;
    margin: 0;
    outline: 0;
    padding: 1rem;
    width: 100%;
    &::placeholder {
        color: ${props => props.theme.color.fg};
        opacity: 0.7;
    }
    @media screen and (min-width: 600px){
        max-width: 500px;
    }
`

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    width: 100%;
    @media screen and (min-width: 600px){
        padding: 2rem 0;
    }
`

const Search = (props) => (
    <Wrapper>
        <Searchbar onChange={(e)  => props.handleSearchChange(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? props.handleSearchClick() : null} value={props.searchBox} type="text" placeholder="Find a meteorite..." autoFocus/>
        <Button onClick={() => props.handleSearchClick()}>
            <i className="fas fa-search"></i>
            <span>Search</span>
        </Button>
    </Wrapper>
)

export default Search