import Container from "react-bootstrap/Container";
import {Button, Card, Col, Image, Row} from "react-bootstrap";

export const Device = () => {
  const device = {id:1, name:'Iphon 12 pro', price:12000, rating:5, img:'https://www.cifrus.ru/pictures/news/iphone-12-v-novom-tsvete-purple-3.jpg'};
  const description = [
    {id:1, title:'Оперативная память', description:'5 гб'},
    {id:2, title:'Оперативная память', description:'5 гб'},
    {id:3, title:'Оперативная память', description:'5 гб'},
    {id:4, title:'Оперативная память', description:'5 гб'},
    {id:5, title:'Оперативная память', description:'5 гб'},
    {id:6, title:'Оперативная память', description:'5 гб'},
    {id:7, title:'Оперативная память', description:'5 гб'},
  ]

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img}/>
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
        {description.map((info, index)=>
          <Row key={info.id} style={{background: index%2===0?'lightgray':'transparent', padding:10}}>
            {info.title}: {info.description}
          </Row>
        )}
      </Row>
    </Container>
  )
}