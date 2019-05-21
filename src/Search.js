import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.theme.color.fg};
    border: 0;
    box-shadow: none;
    color: ${props => props.theme.color.body};
    outline: 0;
    padding: 1rem;
`

const Searchbar = styled.input`
    background-color: ${props => props.theme.color.bg2};
    border: 0;
    color: ${props => props.theme.color.body};
    outline: 0;
    padding: 1rem;
`

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    @media screen and (min-width: 1024px){
        flex-direction: row;
    }
`

const Search = () => (
    <Wrapper>
        <Searchbar type="text" placeholder="Find a meteorite..." autofocus="true"/>
        <Button>Search</Button>
    </Wrapper>
)

export default Search