import { Col, Row, Card, Button } from "react-bootstrap";

export const ProductCard = ({ product }) => {
  return (
    <Col style={{ marginTop: 20 }}>
      <Card>
          <Card.Img variant="left" src={product.imageUrl} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button variant="secondary">Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
