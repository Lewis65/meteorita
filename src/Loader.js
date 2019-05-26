import React from 'react'
import styled from 'styled-components'

const Spinner = styled.div`
    animation: spin 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite forwards;
    color: ${props => props.theme.color.fg};
    font-size: 3rem;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`

const Loader = () => (
    <Wrapper>
        <Spinner>
            <i className="fas fa-spinner"></i>
        </Spinner>
    </Wrapper>
)

export default Loader