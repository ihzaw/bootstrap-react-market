import { Container, Row } from "react-bootstrap";
import { ItemDetail } from "../components/ItemDetail";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSellers } from "../store/actionCreator";

export const Homepage = () => {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellerReducer.sellers);

  useEffect(() => {
    dispatch(fetchSellers());
  }, []);
  return (
    <Container style={{ marginTop: 40 }}>
      {sellers.map((seller) => {
        return (
          <Row>
            <ItemDetail key={seller.seller_code} seller={seller}/>
          </Row>
        );
      })}
    </Container>
  );
};
