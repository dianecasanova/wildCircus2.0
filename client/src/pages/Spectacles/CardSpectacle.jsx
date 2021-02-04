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

// Titre, Type, Description, Image, Durée, Date, Ville

function CardSpectacle({
  Titre,
  Type,
  Description,
  Image,
  Duree,
  Date,
  Ville,
}) {
  return (
    <CardDeckStyled>
      <CardStyled>
        <CardImgStyled width="10%" src={Image} alt="Card image cap" />
        <CardBody>
          <CardTitleStyle>{Titre}</CardTitleStyle>
          <CardSubtitle className="mb-2 text-muted">{Type}</CardSubtitle>
          <CardText>{Description}</CardText>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {Duree}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {Date}
          </CardSubtitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            {Ville}
          </CardSubtitle>
          <Button>Réserver</Button>
        </CardBody>
      </CardStyled>
    </CardDeckStyled>
  );
}

const CardDeckStyled = styled(CardDeck)`
  margin: 20px;
  padding: 20px;
  width: 100%;
`;

const CardImgStyled = styled(CardImg)`
  width: 100%;
  height: 35vh;
  object-fit: cover;
  opacity: 0.8;
`;

const CardStyled = styled(Card)`
  margin: 20px;
  padding: 20px;
`;

const CardTitleStyle = styled.a`
  width: 50%;
  top: 50%;
  left: 50%;
  padding-top: 25px;
  padding-bottom: 25px;
  font-size: 20px;
`;
export default CardSpectacle;
