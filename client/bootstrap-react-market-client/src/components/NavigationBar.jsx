import { Navbar, Container, Nav } from 'react-bootstrap'

export const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Nav
          className="me-auto"
          onSelect={(selectedKey) => console.log(selectedKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey="home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="create">Create</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
