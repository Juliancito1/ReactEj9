import { Button, Card , Col, Form, Row } from "react-bootstrap";

const Cardcita = ({listadoPacientes}) => {
    return (
        <section>
                <Row className="mt-3 container">
            {listadoPacientes.map((mascota,indice) => (
            <Col md={6} lg={4} key={indice}>
            <Card className="mb-3">
                <Card.Header className="bg-info">
                    <article className="row d-flex d-inline">
                    <img src="https://img.freepik.com/free-vector/pet-logo-design-paw-vector-animal-shop-business_53876-136741.jpg?w=2000" alt="" className="col-5 col-md-4 col-lg-3 rounded-circle"/>
                    <div className="col-7 col-md-8 col-lg-7">
                        <h3>{mascota.nombreMascota}</h3>
                        <h4>{mascota.nombreDuenio}</h4>
                    </div>
                    </article>
                </Card.Header>
                <Card.Body>
                    <Form>  
                    <Form.Group className="mb-3" controlId="formFecha">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="text" placeholder="dd/mm/aaaa" readOnly value={mascota.fecha}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formHora">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="text" placeholder="hh:mm" readOnly value={mascota.hora}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formSintomas">
                    <Form.Label>Sintomas</Form.Label>
                    <Form.Control as="textarea" className="Area" rows={4} placeholder="Describir los sintomas" readOnly value={mascota.sintomas}/>
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
            ))}
            </Row>
        </section>
    );
};

export default Cardcita;