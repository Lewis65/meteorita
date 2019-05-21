import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Search = () => (
    <Wrapper>
        <form name="search">
            <input type="text" placeholder="Find a meteorite..."/>
            <button>Search</button>
        </form>
    </Wrapper>
)

export default Search