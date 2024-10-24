import styled from 'styled-components';
import calander from "../icons/calander.svg"

// Styled components
const Container = styled.div`
  display: flex;
  width: calc(33.33% - 40px);
  height: auto;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: white;
  
  
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 20px 20px 0px 0px;
  
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  
  height:140px;
`;

const Heading = styled.h1`
  font-size: 16px;
  font-weight: 500;
  font-family:"DM Sans",san-sarif;
  color: #4B72C9;
  margin: 0;
  width:80px;
  height:23px;
  text-align:center;

  
  background-color:#E9F4FE;
  padding-left:5px;
  border-radius:5px;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 600;
  font-family:"DM Sans",san-sarif;
  color: black;
  margin: 0;
  margin-top:5px;
`;

const ExtraContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top:17px;
`;

const Button = styled.div`
  font-weight: 500;
  font-size: 14px;
  font-family:"DM Sans" san-sarif;
  color: rgba(37, 38, 37, 1);
  text-decoration: underline;
  cursor: pointer;
`;

const Date = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: rgba(85, 85, 85, 1);
  margin: 0;

  img{
  width:18px;
  height:16px;
  margin-left:2px;
  margin-right:2px;
  margin-top:2px;
  }
  
`;

const BlogCard = ({ image, title, description }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} alt="blog" />
      </ImageContainer>
      <ContentContainer>
        <Heading>{title}</Heading>
        <Description>{description}</Description>
        <ExtraContainer>
          
          <Date><img src={calander} alt="" />October 1, 2024</Date>
          <Button>Read More</Button>
          
        </ExtraContainer>
      </ContentContainer>

      
    </Container>
  );
};

export default BlogCard;
