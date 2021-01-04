import React from 'react'
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import {firstLetterCap} from "../helper"


const SummaryContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`

const Summary = ({data}) => {

    // Get from data
    const {brand, year, plan} = data

    if (brand === "" || year === "" || plan === "") return null

    return (
        <SummaryContainer>
            <h2>Quoter Summary</h2>
            <ul>
                <li>Brand: {firstLetterCap(brand)}</li>
                <li>Plan: {firstLetterCap(plan)}</li>
                <li>Year: {year}</li>
            </ul>
        </SummaryContainer>
    )
}

Summary.propTypes = {
    data: PropTypes.object.isRequired
}
 
export default Summary