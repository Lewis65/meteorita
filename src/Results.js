import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    td {
        padding: 0.5rem;
    }
`

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Results = () => (
    <Wrapper>
        <Table>
            <thead>
                <td>Name</td>
                <td>ID</td>
                <td>Date</td>
                <td>Location</td>
            </thead>
            <tr>
                <td>Elliot</td>
                <td>1</td>
                <td>01/01/1950</td>
                <td>Dallas, TX</td>
            </tr>
        </Table>
    </Wrapper>
)

export default Results