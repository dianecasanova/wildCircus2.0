import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import { useHistory } from "react-router-dom";

const BurgerOpen = ({ toggle }) => {
  const history = useHistory();
  const handleClick = (e) => {
    console.log(e.target.textContent);
    history.push(`/${e.target.textContent.toLowerCase()}`);
    toggle();
  };

  return (
    <BurgerContainer>
      <CloseLogo onClick={toggle}>
        <GrFormClose style={{ fontSize: "2em" }} />
      </CloseLogo>
      <ItemList>
        <li onClick={(e) => handleClick(e)}>SPECTACLES</li>
        <li onClick={(e) => handleClick(e)}>TOURNEE</li>
        <li onClick={(e) => handleClick(e)}>TARIFS</li>
        <li onClick={(e) => handleClick(e)}>NOTRE HISTOIRE</li>
      </ItemList>
    </BurgerContainer>
  );
};

const CloseLogo = styled.div`
  width: 100%;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
  cursor: pointer;
`;

const BurgerContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ItemList = styled.ul`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  li {
    color: #fe8a33;
    list-style: none;
    cursor: pointer;
  }
`;

export default BurgerOpen;
