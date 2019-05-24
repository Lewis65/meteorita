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

const TableHead = styled.tr`
    background-color: ${props => props.theme.color.fg};
    color: ${props => props.theme.color.body};
    th {
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

function Results(props) {

    let rows = []

    if(props.data){
        rows = props.data.map((meteorite, index) => {
            return (
                <TableRow key={index}>
                    <td>{meteorite.name}</td>
                    <td>{meteorite.id}</td>
                    <td>{`${meteorite.mass > 999 ? (Math.round(meteorite.mass/10)/100)+'k' : meteorite.mass}g`}</td>
                    <td>{meteorite.year.substr(0, 4)}</td>
                    <td>{meteorite.geolocation.latitude}</td>
                    <td>{meteorite.geolocation.longitude}</td>
                </TableRow>
            )
        })
    }

    return (
        <Wrapper>
            <Table>
                <thead>
                    <TableHead>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Mass</th>
                        <th>Year</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </TableHead>
                </thead>
                <tbody>
                    {props.loading ? <TableRow><td colspan='6'>LOADING</td></TableRow> : rows}
                </tbody>
            </Table>
        </Wrapper>
    )
}

export default Results