import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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