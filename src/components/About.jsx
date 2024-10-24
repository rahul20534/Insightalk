import styled from "styled-components";

//images

import male from '../icons/Male.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: white;
  box-sizing: border-box;
  padding: 40px;
`;

const Heading = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: rgba(96, 125, 188, 1);
  text-align: center;
`;

const WhyBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 200px;
  gap: 10px;
  text-align: center;

  h1 {
    margin: 0;
    font-size: 58px;
    font-family: "Outfit", sans-serif;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);

    span {
      color: rgb(46, 74, 133);
      font-weight: 600;
    }
  }

  p {
    font-size: 22px;
    color: rgba(74, 77, 74, 1);
    line-height: 1.4;
  }
`;

const StepBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-top: 40px;
  margin-right:600px;
`;

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  left:330px;
`;

const Circle = styled.div`

 width: 370px;
  height: 380px;
  margin-left:300px;
 background-color:#B0C2E9;
 border-radius:200px 25px 25px 25px;
 `;

const Image = styled.img`
  position: relative;
  right:350px;
  top:25px;
  width: 330px;
  height: 330px;
  
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 700px;
  box-sizing: border-box;
  position:relative:
  right:300px;
  gap: 10px;
  
  
  
  h2{
 
    font-family: "Lora", sans-serif;
    font-size: 42px;
    font-weight: 400;
    margin: 0;

    color:#2E4985;
  }

  p{
    font-size: 22px;
    font-weight: 400;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  height:45px;
  gap: 20px;
  font-weight: 600;
  font-size: 22px;
  color: rgba(74, 77, 74, 1);

  div{
  &.icon1 {
    height: 20px;
    width: 20px;
    background-color: #C6CFE1;
    border-radius:50%;
    
  }

  &.icon2{
    border-left: 10px solid white; 
    border-right: 10px solid white; 
    border-bottom: 20px solid #C6CFE1; 
    background-color: #C6CFE1;
    
  }

  &.icon3{
  height: 20px;
  width: 20px;
    background-color: #C6CFE1;
   
  }


  }
  

  
`;

const About = () => {
  return (
    <Container>
      <Heading>ABOUT US</Heading>
      
      <WhyBlock>
        <h1>
          Why <span>“Insightalk”</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s. Lorem Ipsum is the dummy text where you have to write about
          insightalk.
        </p>
      </WhyBlock>
      
      <StepBlock>
        <ImageContainer>
          
          <Circle color="rgba(255, 247, 135, 0.4)" size="200px" top="30%" left="75%" />
          <Image src={male} alt="Description" />
        </ImageContainer>

        <Block>
          <h2>Precision treatment, tailored to the individual</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.</p>

          <Step>
            <div className="icon1"/>
            Step sample 1
          </Step>

          <Step>
            <div className="icon2"/>
            Step sample 2
          </Step>

          <Step>
            <div className="icon3"/>
            Step sample 3
          </Step>
          
        </Block>
      </StepBlock>

      


    </Container>
  );
};

export default About;
