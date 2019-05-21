import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media screen and (min-width: 1024px){
        flex-direction: row;
    }
`

const Search = () => (
    <Wrapper>
        <input type="text" placeholder="Find a meteorite..."/>
        <button>Search</button>
    </Wrapper>
)

export default Search