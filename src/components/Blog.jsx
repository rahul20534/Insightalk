import styled from "styled-components";
import BlogCard from "./BlogCard";
import Image1 from '../assets/img1.png';
import Image2 from '../assets/img2.png';
import right from '../icons/rightarrow.svg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px;
  background-color: rgba(247, 240, 230, 1);
`;

const Heading = styled.h1`
  font-size: 18px;
  font-weight: 600;
  font-family:"Outfit",san-sarif;
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
`;

const BlogContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 80px 100px;
  box-sizing: border-box;
  width: 100%;
`;

const Button = styled.button`
width:200px;
height:60px;
background-color:#2E4985;
font-size: 15px;
    font-family: "inter", sans-serif;
    font-weight: 400;
    border-radius:22px;
    border:1px solid #2E4985;
    color:white;


`
const Image = styled.img`
position:relative;
width:20px;
height:15px;
left:6px;
top:3px;


`

const Blog = () => {
  return (
    <Container>
      <Heading>Blog</Heading>
      <WhyBlock>
        <h1>
        Learn More About <span>Therapy</span>
        </h1>
      </WhyBlock>
      <BlogContainer>
        <BlogCard
          image={Image1}
          title="THERAPY"
          description="Harnessing Willpower: A Dual Approach for Clinicians"
        />
        <BlogCard
          image={Image2}
          title="THERAPY"
          description="How PTSD Can Cause Learning Disabilities"
        />
        <BlogCard
          image={Image1}
          title="THERAPY"
          description="Harnessing Willpower: A Dual Approach for Clinicians"
        />
      </BlogContainer>

      <Button> More Blogs <Image src={right}/></Button>
    </Container>
  );
};

export default Blog;
