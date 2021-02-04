import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

import styled from "styled-components";

const Spectacles = (props) => {
  return (
    <>
      <TitleSection1>
        <Title1>LE CIRQUE WILD CIRCUS</Title1>
        <Paragraphe>présente</Paragraphe>
      </TitleSection1>
      <CardDeckStyled>
        <CardStyled>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </CardStyled>
        <CardStyled>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </CardStyled>
        <CardStyled>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </CardStyled>
      </CardDeckStyled>
    </>
  );
};

const CardDeckStyled = styled(CardDeck)`
  margin: 20px;
  padding: 20px;
`;

const CardStyled = styled(Card)`
  &:hover {
    transition: transform 0.3s;
    transform: scale(1.07);
  }
`;
const TitleSection1 = styled.div`
  background-color: #f6f6f6;
  padding: 20px 0;
  font-family: "DM Sans", sans-serif;
  margin: 5vh;
`;

const Title1 = styled.h1`
  text-align: center;
  color: grey;
  font-family: "DM Sans", sans-serif;
`;
const Paragraphe = styled.p`
  text-align: center;
  padding-left: 80px;
  padding-right: 80px;
  font-family: "DM Sans", sans-serif;
`;
export default Spectacles;
