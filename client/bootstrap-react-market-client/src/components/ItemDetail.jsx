import {
  Row,
  Accordion,
} from 'react-bootstrap'
import { ProductCard } from './ProductCard'

export const ItemDetail = () => {
    return (
        <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
              <div style={{ justifyItems: 'center', textAlign:'start'}}>
                <p style={{ flex: 1, fontSize: 24, color: "#171717" }}>Seller name</p>
                <p style={{ flex: 1, fontSize: 16, color: "#71717a" }}>Address</p>
              </div>
          </Accordion.Header>
          <Accordion.Body style={{ textAlign: 'start'}}>
            <Row>
              <ProductCard />
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
}