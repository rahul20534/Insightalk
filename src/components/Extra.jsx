import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size:16px;
  font-Weight:400;
  font-family:"DM Sans",san-sarif;
  background-color: #EAF8F8;
  color: #2E4985;
  box-sizing: border-box;
  padding: 40px;

  span{
  font-size:16px;
  font-Weight:700;
  font-family:"DM Sans",san-sarif;
  }

`


const Extra = () => {
  return (
    <Container>
      If you didn't find what you were looking for, please reach out to us at <span>support@insightalk.com</span>  or <span>+91 9990 330 440</span>. We're here for you - for anything you might need.
    </Container>
  )
}

export default Extra