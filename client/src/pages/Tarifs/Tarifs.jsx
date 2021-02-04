import React from "react";
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
} from "availity-reactstrap-validation";
import { Button, Label, FormGroup } from "reactstrap";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import AvCheckbox from "availity-reactstrap-validation/lib/AvCheckbox";

export default class Tarifs extends React.Component {
  render() {
    return (
      <>
        <TitleSection1>
          <Title1>RESERVEZ VOTRE PROCHAIN SPECTACLE</Title1>
          <Paragraphe>Ca se passe ici !</Paragraphe>
        </TitleSection1>
        <DivContainer>
          <AvForm>
            {/* With AvField */}
            <AvField name="name" label="Nom" required />
            {/* With AvGroup AvInput and AvFeedback to build your own */}
            <AvGroup>
              <Label for="example">E-mail</Label>
              <AvInput name="rank" id="example" required />
              <AvFeedback>This is an error!</AvFeedback>
            </AvGroup>
            {/* Radios */}
            <AvRadioGroup
              name="radioExample"
              label="Spectacle"
              required
              errorMessage="Pick one!"
            >
              <AvRadio
                label="La perle du Bengale"
                value="La perle du Bengale"
              />
              <AvRadio
                label="La princesse
            acrobate"
                value="La princesse
            acrobate"
              />
              <AvRadio
                label="Les aventures de la princesse de Saba"
                value="Les aventures de la princesse de Saba"
              />
            </AvRadioGroup>

            <AvField name="date" label="Date" type="date" />

            <AvCheckboxGroup
              name="checkboxCustomInputExample"
              label="Villes"
              required
            >
              <AvCheckbox customInput label="Barcelone" value="Barcelone" />
              <AvCheckbox customInput label="Paris" value="Paris" />
              <AvCheckbox customInput label="Dublin" value="Dublin" />
              <AvCheckbox customInput label="Moscou" value="Moscou" />
              <AvCheckbox customInput label="Singapour" value="Singapour" />
              <AvCheckbox customInput label="Sydney" value="Sydney" disabled />
            </AvCheckboxGroup>

            <FormGroup>
              <Button>Reserver</Button>
            </FormGroup>
          </AvForm>
        </DivContainer>
        <Footer />
      </>
    );
  }
}

const TitleSection1 = styled.div`
  background-color: #f6f6f6;
  padding: 20px 0;
  font-family: "DM Sans", sans-serif;
  margin: 5vh;
`;

const DivContainer = styled.div`
  padding: 20px 0;
  font-family: "DM Sans", sans-serif;
  margin: 5vh;
  display: flex;
  justify-content: center;
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
