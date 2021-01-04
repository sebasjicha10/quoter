import React, {useState} from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import {getYearDifference, calculateBrand, getPlan} from "../helper"


const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 100px
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`

const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

const Form = ({setSummary, setLoading}) => {

    const [data, setData] = useState({
        brand: "",
        year: "",
        plan: ""
    })

    const [error, setError] = useState(false)

    // Extract state values
    const {brand, year, plan} = data

    // Put form data in state
    const getData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    // Handle submit
    const handleQuote = e => {
        e.preventDefault()

        if(brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
            setError(true)
            return
        }
        setError(false)

        // 2000 base
        let result = 2000

        // Get Year Difference
        const diference = getYearDifference(year)

        // Subtract 3% each year 
        result -= (( diference * 3 ) * result) / 100

        // American 15%, Asian 5%, European 30%
        result = calculateBrand(brand) * result

        // Increase according to plan (Basic 20%, Complete 50%)
        const planIncrease = getPlan(plan)
        result = parseFloat(planIncrease * result).toFixed(2)

        // Handle Loading Spinner 
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setSummary({
                quoter: Number(result),
                data
            })
        }, 3000)

    }

    return ( 

        <form
            onSubmit={handleQuote}
        >
            {error ? <Error>All fields are mandatory</Error> : null}

            <Field>
                <Label>Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getData}
                >
                    <option value="">-- Select --</option>
                    <option value="american">American</option>
                    <option value="european">European</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>
            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getData}
                >
                    <option value="">-- Select --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basic"
                    checked={plan === "basic"}
                    onChange={getData}
                /> Basic
                
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="complete"
                    checked={plan === "complete"}
                    onChange={getData}
                /> Complete
            </Field>
            <Button type="submit">Quote</Button>
        </form>

    )
}

Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Form