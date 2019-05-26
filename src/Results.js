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

    function formatMass(massInGrams) {
        if(massInGrams){
            return massInGrams > 999 ? (Math.round(massInGrams/10)/100)+'kg' : (Math.round(massInGrams*100)/100)+'g'
        } else {
            return 'No data'
        }
    }

    let rows = []

    if(props.data){
        rows = props.data.map((meteorite, index) => {
            return (
                <TableRow key={index}>
                    <td>{meteorite.name}</td>
                    <td>{meteorite.id}</td>
                    <td>{formatMass(meteorite.mass)}</td>
                    <td>{meteorite.year ? meteorite.year.substr(0, 4) : 'No data'}</td>
                    <td>{meteorite.geolocation ? meteorite.geolocation.latitude : 'No data'}</td>
                    <td>{meteorite.geolocation ? meteorite.geolocation.longitude : 'No data'}</td>
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
                    {props.loading ? <TableRow><td colSpan='6'>...</td></TableRow> : rows}
                </tbody>
            </Table>
        </Wrapper>
    )
}

export default Results