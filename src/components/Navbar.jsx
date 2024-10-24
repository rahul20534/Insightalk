import styled from "styled-components";

// icon
import LOGO from "../icons/Insightalk.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  height: 45px;
  background: transparent;
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 450px) {
    display: none; // Hide the navbar when screen width is below 450px
  }
`;

const LogoContainer = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1; 
  gap: 40px;
  color: rgba(46, 73, 133, 1);
  
`;

const MenuItem = styled.div`
 font-size: 18px;
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
display:flex;
flex-direction:row;
text-align:center;
`;

const Button = styled.div`
  display: flex;
  border-radius: 18px;
  padding: 12px 20px;
  border: 2px solid rgba(46, 73, 133, 1);
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center; 
`;

const Navbar = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo src={LOGO} />
      </LogoContainer>

      <MenuContainer>
        <MenuItem>About</MenuItem>
        <MenuItem>Blogs</MenuItem>
        <MenuItem>Team</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <MenuItem>Testimonials</MenuItem>
        <MenuItem>Contact</MenuItem>
        
      </MenuContainer>

      <ButtonContainer>
        <Button>Book An Appointment</Button>
      </ButtonContainer>

    </Container>
  );
};

export default Navbar;
