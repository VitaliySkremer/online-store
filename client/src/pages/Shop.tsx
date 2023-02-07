import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {TypeBar} from "../components/TypeBar/TypeBar";
import {BrandBar} from "../components/BrandBar/BrandBar";
import {DeviceList} from "../components/DeviceList/DeviceList";
import {useDeviceStore} from "../store/useDeviceStore";
import {useEffect} from "react";
import {fetchBrand, fetchDevice, fetchTypes} from "../http/deviceAPI";

export const Shop = () => {

  const setTypes = useDeviceStore(state => state.setTypes)
  const setBrands = useDeviceStore(state => state.setBrands)
  const setDevices = useDeviceStore(state => state.setDevices)

  useEffect(()=>{
    fetchTypes().then(data=> setTypes(data))
    fetchBrand().then(data=> setBrands(data))
    fetchDevice().then(data=> setDevices(data.rows))
  },[])

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