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
    font-family: "Outfit", sans-serif;
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
    font-family: "Lora", sans-serif;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.8);

    span {
      color: rgb(46, 74, 133);
      text-align:center;
      
       font-size: 58px;
    font-family: "Lora", sans-serif;
    font-weight: 600;
    }
  }

  p {
    font-size: 22px;
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
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
  left:360px;
  
`;

const Circle = styled.div`

 width: 431px;
  height: 446px;
  margin-left:300px;
 background-color:#B0C2E9;
 border-radius:200px 25px 25px 25px;
 `;

const Image = styled.img`
  position: relative;
  right:400px;
  top:25px;
  width: 385px;
  height: 394px;
  
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 580px;
  box-sizing: border-box;
  
  gap: 10px;
  
  
  
  
  h2{
    font-family: "Lora", sans-serif;
    font-size: 42px;
    font-weight: 400;
    margin: 0;
    color:#2E4985;
    width:450px;
    
  }

  p{
    font-family: "DM Sans", sans-serif;
    font-size: 22px;
    font-weight: 400;
    
    margin-top:10px;
    width:500px;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  height:45px;
  gap: 20px;
  font-family: "DM Sans", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: rgba(74, 77, 74, 1);
  

  div{
  &.icon1 {
    height: 20px;
    width: 20px;
    background-color: #2E4985;
   
    
  }

  &.icon2{
   height: 20px;
    width: 20px;
    background-color: #5976B6;
  }

  &.icon3{
  height: 20px;
  width: 20px;
  background-color: #96ADE1;
  }

  &.icon4{
  height: 20px;
  width: 20px;
  background-color: #CDDAF6;
  }


  }
  

  
`;

const About = () => {
  return (
    <Container>
      <Heading>ABOUT US</Heading>

      <WhyBlock>
        <h1>
          Talk Your Way To <span>Insights</span>
        </h1>
        <p>
          At Insightalk, we understand that it's okay to not feel okay.
          <br />
          <br />
          We're here to help you find your perfect therapist and focus on maintaining
          your mental health daily. It's not just about fixing things; it's about finding
          new ways to feel better. We are committed to providing you with the highest
          quality of mental healthcare. Our team of qualified therapists is dedicated
          to helping you achieve your personal goals and live a more fulfilling life.
          <br />
          <br />
          Let's talk about it.
        </p>
      </WhyBlock>

      <StepBlock>
        <ImageContainer>

          <Circle color="rgba(255, 247, 135, 0.4)" size="200px" top="30%" left="75%" />
          <Image src={male} alt="Description" />
        </ImageContainer>

        <Block>
          <h2>Define the thoughts that define you</h2>
          <p>Set meaningful goals, develop a plan of action
            and overcome challenges along the way.</p>

          <Step>
            <div className="icon1" />
            Convenient access anytime, anywhere
          </Step>

          <Step>
            <div className="icon2" />
            Precision treatment, tailored to your needs
          </Step>

          <Step>
            <div className="icon3" />
            Professional support from licensed therapists
          </Step>


          <Step>
            <div className="icon4" />
            Safe and supportive space created for you
          </Step>

        </Block>
      </StepBlock>




    </Container>
  );
};

export default About;
