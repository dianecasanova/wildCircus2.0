import { Col, Row } from "reactstrap";
import styled from "styled-components";

function Apropos({ path }) {
  return (
    <div href={path}>
      <Title>WILD CIRCUS - UNE HISTOIRE DE FAMILLE</Title>
      <Row>
        <Col>
          <Paragraphe>
            Le cirque <strong>Wild Circus</strong> est une institution nationale
            des arts du spectacle vieille de plus de 160 ans. Inauguré par
            Louis-Napoléon Bonaparte en 1852, le Cirque Napoléon devient le Wild
            Circus en 1873. Après avoir été transformé en cinéma au début du XXe
            siècle par Pathé, il est devenu un cirque et s'est modernisé dans
            les années 1920: Gaston Desprez, son propriétaire, a construit des
            stands en béton et une piscine sous la scène.
          </Paragraphe>
          <Paragraphe>
            Endetté, il le vendit en 1934 aux quatre frères Bouglione,
            descendants des douches gitanes italiennes. Ils mettent en scène des
            pantomimes grandioses («La perle du Bengale», «La princesse
            acrobate», «Les aventures de la princesse de Saba»), reprises lors
            de tournées nationales sous des chapiteaux. D'une capacité de 1500
            places autour d'une piste de 140 mètres carrés, le Wild Circus
            accueille également des concerts et autres spectacles, ainsi que des
            réunions politiques. Les anciennes écuries et la ménagerie ont été
            transformées en salles de réception.
          </Paragraphe>
        </Col>
      </Row>
    </div>
  );
}

const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  color: black;
  font-style: italic;
`;

const Paragraphe = styled.p`
  text-align: justify;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export default Apropos;
