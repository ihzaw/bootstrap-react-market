import { Container, Row, Col } from 'react-bootstrap'

export const Homepage = () => {
    return (
        <Container fluid>
            <Row >
                <Col>Logo</Col>
                <Col xs={10}>
                    <Row>
                        <Col>1</Col>
                        <Col>2</Col>
                        <Col>3</Col>
                        <Col>4</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}