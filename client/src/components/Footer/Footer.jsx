import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoytbe from "../../images/ytben&b.png";
import logoInsta from "../../images/instn&b.png";
import logofb from "../../images/logoFacebook.png";
import logo from "../../images/logo_elephant.png";

const Footer = () => {
  return (
    <Background>
      <DivContainer fluid>
        <Row>
          <Col>
            <Logo1 src={logo} alt="logo wild circus" />
            <Paragraphe>Les plus beaux numéros du monde</Paragraphe>
          </Col>
          <Col>
            <List>
              <StyledAFooter to="/contact">CONTACT</StyledAFooter>
            </List>
            <List>
              <StyledAFooter to="/legalNotice">MENTIONS LEGALES</StyledAFooter>
            </List>
            <List>
              <StyledAFooter to="/privacyPolicies">
                POLITIQUE DE CONFIDENTIALITES
              </StyledAFooter>
            </List>
          </Col>
          <Col>
            <Row>
              <Col>
                <List>
                  <a
                    href="https://www.instagram.com/explore/tags/circus/?hl=fr"
                    target="blank"
                  >
                    <Logo2 src={logoInsta} alt="instagram" />
                  </a>
                </List>
              </Col>
              <Col>
                <List>
                  <a href="https://fr-fr.facebook.com/" target="blank">
                    <Logo2 src={logofb} alt="instagram" />
                  </a>
                </List>
              </Col>
              <Col>
                <List>
                  <a
                    href="https://www.youtube.com/watch?v=ONrqI8C7TiE&ab_channel=CircusSmirkus"
                    target="blank"
                  >
                    <Logo3 src={logoytbe} alt="youtube teaser" />
                  </a>
                </List>
              </Col>
            </Row>
          </Col>
        </Row>
      </DivContainer>
    </Background>
  );
};

const Background = styled.div`
  background-color: #cc3900;
  position: absolute;
  bottom: -40vh;
  width: 100%;
  padding-top: 50px;
  height: 50px;
`;

const DivContainer = styled.div`
  background-color: #cc3900;
  margin: 0;
  position: relative;
`;
const List = styled.li`
  padding-top: 20px;
  list-style: none;
  margin-left: 40px;
`;

const StyledAFooter = styled(Link)`
  color: #fe8a33;
  &:hover {
    color: #c03023;
    text-decoration: none;
  }
`;

const Logo1 = styled.img`
  margin-left: 30px;
  width: 60px;
`;

const Logo2 = styled.img`
  width: 30px;
  margin-left: 10px;
`;

const Logo3 = styled.img`
  width: 30px;
`;

const Paragraphe = styled.p`
  margin-top: 0;
  margin-left: 50px;
  padding-top: 10px;
  font-style: italic;
`;

export default Footer;
