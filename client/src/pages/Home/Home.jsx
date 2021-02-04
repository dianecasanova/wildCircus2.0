import { UncontrolledCarousel } from "reactstrap";
import styled from "styled-components";
import circus from "../../images/circus_titre.jpg";
import circus1 from "../../images/fond_cirque.jpg";
import circus2 from "../../images/fond_cirque.png";
import Apropos from "../Apropos/Apropos";

const items = [
  {
    src: circus,
    altText: "Wild circus",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: circus1,
    altText: "Wild circus",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: circus2,
    altText: "Wild circus",
    caption: "",
    header: "",
    key: "3",
  },
];

const aPropos = [
  {
    path: "/apropos",
  },
];

const Home = () => {
  return (
    <>
      <CarrouselStyle id="apropos">
        <Carousel items={items} />
      </CarrouselStyle>
      {aPropos.map((i, index) => (
        <Apropos path={i.path} />
      ))}
    </>
  );
};

const Carousel = styled(UncontrolledCarousel)`
  img {
    height: 100vh;
    width: auto;
    @media (max-width: 768px) {
      height: 50vh;
      object-fit: contain;
    }
  }
`;
const CarrouselStyle = styled.div`
  height: 100vh;
  @media (max-width: 768px) {
    height: 50vh;
  }
`;

export default Home;
