import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Images(props) {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={props.image} thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Images;