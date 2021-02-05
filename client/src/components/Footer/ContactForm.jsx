import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, FormGroup, Input, Col, Row, Container } from "reactstrap";
import styled from "styled-components";
import logo from "../../images/logo_elephant.png";
import photoContact from "../../images/contact.jpg";

function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    alert(`Thank you for your message from ${name}`);
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    sendFeedback(serviceID, templateId, {
      name,
      email,
      message,
    });
  };

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        alert(`Email successfully sent ${name}`);
        setName("");
        setEmail("");

        setMessage("");
      })
      .catch((err) => err);
  };

  return (
    <>
      <div>
        <TitleSection1>
          <Title2>CONTACT</Title2>
          <Paragraphe>
            Vous avez une question? Une demande particulière? N'hésitez pas à
            nous contacter!
          </Paragraphe>
        </TitleSection1>
      </div>
      <Container fluid>
        <RowReverse>
          <Col md={6}>
            <CardImgStyled src={photoContact} alt="contactez-nous" />
          </Col>

          <Col md={6}>
            <Logo1 src={logo} alt="logo Miren Poppins" />
            <Paragraphe>Wildcircus@gmail.com</Paragraphe>
            <Paragraphe>+33 (0)6 20 52 30 47</Paragraphe>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="name"
                      name="name"
                      id="exampleName"
                      placeholder="Nom"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      ref={register({
                        required: "Entrez votre nom s'il-vous-plaît",
                        name: "name",
                      })}
                    />
                    {errors.name && errors.name.message}
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="E-mail"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      ref={register({
                        required: "Entrez votre email s'il-vous-plaît",
                        name: "email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Addresse email invalide",
                        },
                      })}
                    />
                    {errors.email && errors.email.message}
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Input
                  type="textarea"
                  name="message"
                  id="exampleText"
                  placeholder="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  ref={register({
                    required: true,
                    name: "message",
                  })}
                />
                {errors.message && "oops, tu as oublié d'écrire ton message!"}
              </FormGroup>
              <button>Envoyer</button>
            </Form>
          </Col>
        </RowReverse>
      </Container>
    </>
  );
}

const TitleSection1 = styled.div`
  background-color: #f6f6f6;
  padding: 20px 0;
  font-family: "DM Sans", sans-serif;
  margin: 5vh;
`;

const Title2 = styled.h2`
  text-align: center;
  font-family: var(--first-font);
  font-size: var(--first-size);
  color: red;
`;

const RowReverse = styled(Row)`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Paragraphe = styled.p`
  text-align: center;
  padding-left: 80px;
  padding-right: 80px;
  font-family: var(--second-font);
  font-size: var(--second-size);
`;

const CardImgStyled = styled.img`
  width: 80%;
  opacity: 0.8;
  margin: 40px;
`;

const Logo1 = styled.img`
  display: block;
  width: 10%;
  padding: 2vh;
  margin-left: auto;
  margin-right: auto;
`;

export default Contact;
