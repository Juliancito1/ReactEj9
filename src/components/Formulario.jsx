import React from 'react';
import { Card, Form , Button } from 'react-bootstrap';
const Formulario = () => {
    return (
        <section className='container my-5'>
            <h1 className='display-4 text-center mb-4 bg-warning fw-bold'>Administrador de Pacientes de Veterinaria</h1>
            <Card className='border border-3 border-dark'>
                <Card.Header className='bg-warning'>
                    <h2>Completar el formulario para crear una cita</h2>
                </Card.Header>
                <Card.Body className='bg-info'>
                    <Form className='row'>
                    <Form.Group className="mb-3 col-md-12" controlId="formNombreMascota">
                    <Form.Label>Nombre de la Mascota</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese el nombre de la mascota. Ej: Juan"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-12" controlId="formNombredueño">
                    <Form.Label>Nombre del dueño</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese el nombre del Dueño. Ej: Pedro"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6" controlId="formFecha">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la fecha. Ej: dd/mm/aaaa"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-6" controlId="formHora">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese la Hora. Ej: hh:mm"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-md-12" controlId="formSintomas">
                    <Form.Label>Sintomas</Form.Label>
                    <Form.Control as="textarea" placeholder="Describa los sintomas"/>
                    </Form.Group>
                    <Button variant="success" className='col-md-1 ms-md-3' type="submit">
                    Enviar
                    </Button>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    );
};

export default Formulario;