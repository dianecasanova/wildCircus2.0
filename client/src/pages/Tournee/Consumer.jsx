import React, { useState } from "react";
import Map from "./Map";
import Marker from "./Marker";
import TransitLayer from "./TransitLayer";
import getPlaces from "./GetPlaces";

import styled from "styled-components";
import Footer from "../../components/Footer/Footer";

export default function Consumer() {
  const places = getPlaces();
  const [placeIndex, setPlaceIndex] = useState(0);
  const [bound, setBound] = useState({});
  const [transitLayerEnabled, setTransitLayerEnabled] = useState(false);

  return (
    <>
      <div>
        <TitleSection1>
          <Title1>TOURNEE DU WILD CIRCUS</Title1>
          <Paragraphe>
            Barcelone, Paris, Dublin, Moscou, Sydney, Singapour
          </Paragraphe>
        </TitleSection1>
        <DivContainer fluid="true">
          <Map
            zoom={10}
            center={{
              lat: places[placeIndex].lat,
              lng: places[placeIndex].lng,
            }}
            events={{ onBoundsChangerd: (arg) => setBound(arg) }}
          >
            <TransitLayer enabled={transitLayerEnabled} />
            {places.map((m, index) => (
              <Marker
                key={m.id}
                active={placeIndex === index}
                title={"marker id: " + m.id}
                position={{ lat: m.lat, lng: m.lng }}
                events={{
                  onClick: () => window.alert(`marker ${index} clicked`),
                }}
              />
            ))}
          </Map>
        </DivContainer>
      </div>
      <Footer />
    </>
  );
}

const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
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
