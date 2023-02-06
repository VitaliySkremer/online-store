import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {TypeBar} from "../components/TypeBar/TypeBar";
import {BrandBar} from "../components/BrandBar/BrandBar";
import {DeviceList} from "../components/DeviceList/DeviceList";

export const Shop = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <TypeBar/>
        </Col>
        <Col md={9}>
          <BrandBar/>
          <DeviceList/>
        </Col>
      </Row>
    </Container>
  )
}