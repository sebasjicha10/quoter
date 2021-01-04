import React, {useState} from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import Summary from "./components/Summary"
import Result from "./components/Result"
import Spinner from "./components/Spinner"

import styled from "@emotion/styled"


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const FormContainer = styled.div`
  background-color: #FFF;
  padding: 3rem;
`

function App() {
  const [summary, setSummary] = useState({
    quoter: 0,
    data: {
      brand: "",
      year: "",
      plan: ""
    }
  })

  const [loading, setLoading] = useState(false)

  // Get data
  const {quoter,data} = summary

  return (
    <Container>
      <Header 
        title="Insurance Quote"
      />

      <FormContainer>
        <Form 
          setSummary={setSummary}
          setLoading={setLoading}
        />

        {loading ? <Spinner /> : null}

        { !loading ? 
            <Summary 
              data = {data}
            /> : null
        }

        { !loading ? 
            <Result 
              quoter={quoter}
            /> : null
        }

      </FormContainer>
    </Container> 
  )
}

export default App
