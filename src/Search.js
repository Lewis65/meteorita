import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.theme.color.fg};
    border: 0;
    box-shadow: none;
    box-sizing: border-box;
    color: ${props => props.theme.color.body};
    font-size: 1em;
    outline: 0;
    padding: 1rem;
    width: 100%;
    @media screen and (min-width: 600px){
        display: inline-block;
        flex: 0.1 0;
    }
`

const Searchbar = styled.input`
    background-color: ${props => props.theme.color.bg2};
    border: 0;
    box-sizing: border-box;
    color: ${props => props.theme.color.body};
    display: block;
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
        display: inline-block;
        max-width: 400px;
    }
`

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    width: 100%;
    @media screen and (min-width: 600px){
        flex-direction: row;
    }
`

const Search = () => (
    <Wrapper>
        <Searchbar type="text" placeholder="Find a meteorite..." autoFocus/>
        <Button>Search</Button>
    </Wrapper>
)

export default Search