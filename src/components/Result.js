import React from 'react'
import styled from "@emotion/styled"
import PropTypes from "prop-types"


const Message = styled.p`
    background-color: rgb(127, 224, 237);
    marging-top: 2rem;
    text-align: center;
`

const QuoterResult = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26C6DA;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`

const QuoterText = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`

const Result = ({quoter}) => {

    return (
        (quoter === 0) ? <Message>Select a brand, year, and car type</Message> 
        : 
            (
                <QuoterResult>
                    <QuoterText>The total is: ${quoter}</QuoterText>
                </QuoterResult>
            )
    )

}
 
Result.propTypes = {
    quoter: PropTypes.number.isRequired
}

export default Result

