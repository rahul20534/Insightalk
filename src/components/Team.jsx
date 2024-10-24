import styled from 'styled-components';

// Images
import DOC1 from "../assets/doc1.png";
import DOC2 from "../assets/doc2.jpeg";
import DOC3 from "../assets/doc3.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
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

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Image = styled.img`
  width: 336px;
  height: 393px;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s ease; 
  
  &:nth-child(2) {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); // Apply shadow to the middle image
    z-index: 2;
  }

  // Apply rotation
  &:nth-child(1) {
    transform: rotate(2deg);
  }
  
  &:nth-child(2) {
    transform: rotate(0deg); 
  }
  
  &:nth-child(3) {
    transform: rotate(-2deg);
  }

  // Optional: Rotate images on hover for better interactivity
  &:hover {
    transform: scale(1.05) rotate(1deg); // Slightly enlarge on hover
  }
`;

const Team = () => {
  return (
    <Container>
      <Heading>OUR TEAM</Heading>

      <WhyBlock>
        <h1>Our Experienced<span>Therapists</span></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </WhyBlock>

      <ImageContainer>
        <Image src={DOC1} alt="doc1" />
        <Image src={DOC2} alt="doc2" />
        <Image src={DOC3} alt="doc3" />
      </ImageContainer>
    </Container>
  );
}

export default Team;
