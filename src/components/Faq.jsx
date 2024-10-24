import React, { useState } from 'react';
import styled from "styled-components";

// Assuming BIRD is imported correctly
import BIRD from "../assets/bird.png";
import meet from "../icons/fagicon.svg"



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  box-sizing: border-box;
  padding: 40px;
  background-color: #ffffff;
  font-family: Arial, sans-serif;
  
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  margin-left:180px;
  
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Heading = styled.h2`
font-family:"Outfit",san-sarif;
  font-size: 16px;
  font-weight: 600;
  
  color: rgba(96, 125, 188, 1);
  text-align: left;
  margin: 0;
`;

const WhyBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 20px;
  gap: 10px;
  text-align: left;
 
  

  h1 {
    margin: 0;
    font-size: 40px;
    font-family: "Lora", sans-serif;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);
     width:300px;

    span {
      color: rgb(46, 74, 133);
      font-weight: 600;
    }
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 500px;
  margin-right:80px;
 
  
`;

const FAQItem = styled.div`
  border: 2px solid rgba(143, 165, 209, 1);
  border-radius: 8px;
  overflow: hidden;
  
`;

const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px; 
  background-color: #f8f8f8;
  cursor: pointer;
  
  background-color: #EFF4FF;
  color:#2E4985;
  font-size:20px;
  font-weight:600;
  font-family:DM Sans;
`;

const FAQAnswer = styled.div`
  padding: ${props => (props.isOpen ? '15px' : '0 15px')};
  max-height: ${props => (props.isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
    background-color: #EFF4FF;
  color:#2E4985;
  font-size:20px;
  font-weight:600;
  font-family:DM Sans;
`;

const DropdownIcon = styled.span`
  transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.3s ease-in-out;
`;

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: 'Lorem Ipsum', answer: 'This is a sample answer for the first question.' },
    { question: 'Lorem Ipsum This is a sample text', answer: 'This is a sample answer for the second question.' },
    { question: 'Lorem Ipsum This is a sample text', answer: 'This is a sample answer for the third question.' },
    { question: 'Lorem Ipsum This is a sample text', answer: 'This is a sample answer for the fourth question.' },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container>
      <SubContainer>
        <div>
          <Heading>FAQ</Heading>
          <WhyBlock>
            <h1>
              We've Got Your <span>Answers</span>
            </h1>
          </WhyBlock>
        </div>
        <ImageContainer>
          <Image src={meet} alt="Bird icon" />
        </ImageContainer>
      </SubContainer>

      <QuestionContainer>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <FAQQuestion onClick={() => toggleFAQ(index)}>
              {item.question}
              <DropdownIcon isOpen={openIndex === index}>+</DropdownIcon>
            </FAQQuestion>
            <FAQAnswer isOpen={openIndex === index}>{item.answer}</FAQAnswer>
          </FAQItem>
        ))}
      </QuestionContainer>
    </Container>
  );
};

export default Faq;