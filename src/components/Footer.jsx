import React from 'react'
import styled from "styled-components";
import Logo from "../icons/whitelogo.svg";

const Container = styled.div`
width:100%;
height:240px;
display:flex;
flex-direction:column;
background-color:#2E4985;
`

const Upperfooter = styled.div`
display:flex;
height:100px;
`

const LowerContainer = styled.div`
display:flex;
flex-direction:column;
width:500px;
height:110px;
margin-left:450px;
`

const Heading = styled.h1`
font-family: 'Inter', 'sans-serif';
font-size: 34px;
font-weight: 600;
margin-top:25px;
margin-left:2px;
color:white;

&.copyright{
font-family: 'DM Sans', 'sans-serif';
font-size: 18px;
font-weight: 400;
text-align:center;
}
`




const IconImage = styled.img`
width:45px;
height:45px;
margin-left:100px;
margin-top:20px;
`

const UnorderedList = styled.ul`
    list-style-type: none; 
    display: flex;         
    flex-direction:row; 
    
    padding:0;
    margin:0;
    align-item:center;
    justify-content:center; 
    margin-left:430px;     
`;

const List = styled.li`
    margin-right: 40px; 
    font-family: 'DM Sans', 'sans-serif';
    font-size: 18px;
    font-weight: 400;  
    color:white;
    padding-top:34px;
    

    &:last-child {
        margin-right: 0;  
    }
`;

const Line = styled.hr`
border: 1px solid #C5C5C5;
margin: 7px 0; 
width: 87%;
margin-left:104px;
text-align:center;
`
const Ul = styled.ul`
list-style-type: none; 
    display: flex;         
    flex-direction:row; 
     
    padding:0;
    margin:0;
`

const Li = styled.li`
 margin-right: 40px; 
    font-family: 'DM Sans', 'sans-serif';
    font-size: 18px;
    font-weight: 400;  
    color:white;
    padding-top:34px;
    

    &:last-child {
        margin-right: 0;  
    }
`






const Footer = () => {
    return (
        <>
            <Container>
                <Upperfooter>
                    <IconImage src={Logo}></IconImage>
                    <Heading>Insightalk</Heading>

                    <UnorderedList>
                        <List>About</List>
                        <List>Blogs</List>
                        <List>Team</List>
                        <List>FAQ</List>
                        <List>Testimonials</List>
                        <List>Contact</List>
                    </UnorderedList>

                </Upperfooter>

                <Line></Line>

                <LowerContainer>

                    <Ul>
                        <Li>Privacy Policy</Li>
                        <Li>Terms & Conditions</Li>
                        <Li>Terms of use</Li>
                    </Ul>


                    <Heading className='copyright'>© Copyright 2024 Insightalk class</Heading>

                </LowerContainer>

            </Container>


        </>
    )
}

export default Footer
