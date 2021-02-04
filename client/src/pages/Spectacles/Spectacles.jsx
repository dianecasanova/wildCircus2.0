import { useState, useEffect } from "react";
import Axios from "axios";
import CardSpectacle from "./CardSpectacle";

import styled from "styled-components";
// Titre, Type, Description, Image, Durée, Date, Ville

const Spectacles = (props) => {
  const [Shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getShows = async () => {
      try {
        const show = await Axios.get(" http://localhost:3001/spectacle");
        setShows(show.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getShows();
  }, []);

  return (
    <>
      <DivContainer>
        <TitleSection1>
          <Title1>LE CIRQUE WILD CIRCUS</Title1>
          <Paragraphe>présente</Paragraphe>
        </TitleSection1>
        {Shows.map((show) => {
          return (
            <CardSpectacle
              Titre={show.Titre}
              Type={show.Type}
              Description={show.Description}
              Image={show.Image}
              Duree={show.Duree}
              Date={show.Date}
              Ville={show.Ville}
            />
          );
        })}
      </DivContainer>
    </>
  );
};

const TitleSection1 = styled.div`
  background-color: #f6f6f6;
  padding: 20px 0;
  font-family: "DM Sans", sans-serif;
  margin: 5vh;
`;

const DivContainer = styled.div`
  background-color: orange;
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
