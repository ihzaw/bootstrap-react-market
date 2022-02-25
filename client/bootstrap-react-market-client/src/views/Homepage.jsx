import { Container, Row } from "react-bootstrap";
import { ItemDetail } from "../components/ItemDetail";

export const Homepage = () => {
  return (
    <Container style={{ marginTop: 40 }}>
      <Row>
        <ItemDetail />
      </Row>
    </Container>
  );
};
