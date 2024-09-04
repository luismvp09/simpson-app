import Logo from "../img/the-simpson.png";
import styled from "styled-components";

export const Welcome = ({ reqApi}) => {

  return (
    <>
      <WelcomeText>
        Bienvenido, para poder utilizar las fases pincha sobre la imagen
      </WelcomeText>
      <ContentLogo>
        <ImgLogo src={Logo} alt="img-simpson" onClick={reqApi} />
      </ContentLogo>
    </>
  );
};

const ImgLogo = styled.img`
  width: 450px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;
const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-wight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;
