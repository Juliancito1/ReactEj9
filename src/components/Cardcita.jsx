import { Button, Card , Col, Form, Row } from "react-bootstrap";

const Cardcita = () => {
    return (
        <section>
            <Row className="container justify-content-center">
            <Col md={6} lg={4}>
            <Card className="mb-3">
                <Card.Header className="bg-info">
                    <article className="row d-flex d-inline">
                    <img src="https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg?w=2000" alt="" className="col-5 col-md-4 col-lg-3 rounded-circle"/>
                    <div className="col-7 col-md-8 col-lg-7">
                        <h3>Mascota</h3>
                        <h4>Pepe</h4>
                    </div>
                    </article>
                </Card.Header>
                <Card.Body>
                    <Form>  
                    <Form.Group className="mb-3" controlId="formFecha">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="text" placeholder="dd/mm/aaaa"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formHora">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="text" placeholder="hh:mm"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSintomas">
                    <Form.Label>Sintomas</Form.Label>
                    <Form.Control as="textarea" placeholder="Describir los sintomas"/>
                    </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end bg-info">
                    <Button variant="danger">
                        Borrar
                    </Button>
                </Card.Footer>
            </Card>
            </Col>
            </Row>
        </section>
    );
};

export default Cardcita;