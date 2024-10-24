import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px 20px;
  min-width: 200px;
  background-color: rgba(143, 143, 143, 0.3); 
  backdrop-filter: blur(10px);
  border-radius: 15px; 
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); 
  z-index: 10;
  position: absolute;
  top: ${props => props.top || "0"};
  right: ${props => props.right || "0"};
  width: auto; 
  white-space: nowrap; 
  color: ${props => props.color || "rgba(42, 42, 42, 1)"};
`

const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 10px; 
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 50px;
    background-color:${props => props.color || "rgba(42, 42, 42, 1)"}; 
    position: absolute;
    bottom: -7px;
  }
`

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`

const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
`

const ImageHover = ({top, right, icon, content, color}) => {
  return (
    <Container top={top} right={right} color={color}>
      <ImageContainer color={color}>
        <Image src={icon} alt="icon" />
      </ImageContainer>
      <Content>{content}</Content>
    </Container>
  )
}

export default ImageHover
