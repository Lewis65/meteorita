import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    td {
        font-size: 1em;
        padding: 0.5rem;
        word-wrap: break-word;
    }
    @media screen and (min-width: 600px){
        td {
            padding: 1rem;
        }
    }
`

const TableHead = styled.thead`
    background-color: ${props => props.theme.color.fg};
    color: ${props => props.theme.color.body};
    td {
        font-weight: 600;
    }
`

const TableRow = styled.tr`
    background-color: ${props => props.theme.color.bg2};
`

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
`

const Results = () => (
    <Wrapper>
        <Table>
            <TableHead>
                <td>Name</td>
                <td>ID</td>
                <td>Date</td>
                <td>Location</td>
            </TableHead>
            <TableRow>
                <td>Elliot</td>
                <td>1</td>
                <td>01/01/1950</td>
                <td>Dallas, TX</td>
            </TableRow>
            <TableRow>
                <td>Elliot</td>
                <td>1</td>
                <td>01/01/1950</td>
                <td>Dallas, TX</td>
            </TableRow>
            <TableRow>
                <td>Elliot</td>
                <td>1</td>
                <td>01/01/1950</td>
                <td>Dallas, TX</td>
            </TableRow>
        </Table>
    </Wrapper>
)

export default Results