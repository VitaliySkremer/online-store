import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../http/deviceAPI";

interface info{
  id: number;
  title:string;
  description:string;
}

interface Device {
  name: string;
  rating: number;
  price: number;
  img: string;
  info:info[]
}

export const Device = () => {
  const [loading, setLoading] = useState(true);
  const [device, setDevice] = useState<Device>({name:'',info:[], img:'', price:0, rating:0})
  const {id} = useParams();
  useEffect(()=>{
    if(id){
      fetchOneDevice(id)
        .then(data =>setDevice(data))
        .finally(()=> setLoading(false));
    }
  }, [])

  if(loading){
    return <Spinner animation={"grow"}/>
  }

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + '/'+ device.img}/>
        </Col>
        <Col md={4}>
          <Row>
            <h2>
              {device.name}
            </h2>
            <div>{device.rating}</div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="d-flex align-items-center justify-content-between p-2">
            <h3 className="mb-2">{device.price} руб.</h3>
            <Button variant={"outline-primary"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-2">
        <h2>Характеристики</h2>
        {device.info.map((info, index)=>
          <Row key={info.id} style={{background: index%2===0?'lightgray':'transparent', padding:10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  )
}