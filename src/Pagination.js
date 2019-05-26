import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${props => props.theme.color.fg};
    border: 0;
    color: ${props => props.theme.color.body};
    font-size: 20px;
    height: 30px;
    width: 30px;
    text-align: center;
    margin: 2rem;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

function Pagination(props) {

    return(
    <Wrapper>
        <Button onClick={() => props.handlePageClick("prev")}>
            <i className="fas fa-caret-left"></i>
        </Button>
        <Button onClick={() => props.handlePageClick("next")}>
            <i className="fas fa-caret-right"></i>
        </Button>
    </Wrapper>
    )
}

export default Pagination