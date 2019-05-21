import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    td {
        padding: 0.5rem;
    }
`

const TableHead = styled.thead`
    background-color: ${props => props.theme.color.fg};
    color: ${props => props.theme.color.body};
`

const TableRow = styled.tr`
    background-color: ${props => props.theme.color.bg2};
`

const Wrapper = styled.section`
    width: 100%;
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