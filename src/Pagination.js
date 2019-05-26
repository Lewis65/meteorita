import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border: 0;
    color: ${props => props.theme.color.body};
    font-size: 20px;
    height: 30px;
    width: 30px;
    text-align: center;
    margin: 2rem;
    &.disabled {
        background-color: ${props => props.theme.color.bg2};
    }
    &.enabled {
        background-color: ${props => props.theme.color.fg};
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

function Pagination(props) {

    function handleClick(to, allowed){
        if(!allowed){
            return
        }
        props.handlePageClick(to)
    }

    return(
    <Wrapper>
        <Button className={props.enablePrevButton ? "enabled" : "disabled"} onClick={() => handleClick("prev", props.enablePrevButton)}>
            <i className="fas fa-caret-left"></i>
        </Button>
        <Button className={props.enableNextButton ? "enabled" : "disabled"} onClick={() => handleClick("next", props.enableNextButton)}>
            <i className="fas fa-caret-right"></i>
        </Button>
    </Wrapper>
    )
}

export default Pagination